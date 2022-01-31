<template lang="pug">
  .index

    //- (token viewer overlay)
    .fixed.overlay.z-50.transition.transform.duration-700.origin-right.py-5.md_p-10.lg_p-12.xl_p-24.flex.bg-black(:class="{'pointer-events-none scale-x-0ff opacity-0': !viewToken}")
      view-token(:token="$route.params.token", :visible="viewToken", @close="closeViewer")
    //- (token viewer)
    //- .fixed.overlay.z-50.transition.transform.duration-700.origin-right.py-5.md_p-10.lg_p-12.xl_p-24.flex.bg-black(:class="{'pointer-events-none scale-x-0ff opacity-0': !viewToken}")
      view-token(:token="viewToken", @close="closeViewer")

    //- BODY - squishes for video player
    .relative.transform.transition-transform.origin-left.duration-700(:class="{'scale-x-0ff': viewToken}")
      //- (WORK PANEL)
      .sticky.z-20.top-0.right-0.w-full.h-0
        .absolute.top-0.right-0.transition-all.duration-500.transform.origin-right.bg-white.min-h-screen(:class="[panelWidths[1], {'scale-x-0': !panelOpen}]")
          //- panels
          transition-group(name="pagesfade", @before-enter="setPanelWidths")            
            info(v-show="$route.name === 'info'", key="info")
            filters(v-show="$route.name === 'filter'", key="filter")
            //- set-view(v-if="$route.name === 'set'", key="set")
            shred(v-if="$route.name === 'shred'", key="shred")
            work-view(v-else-if="activeWork", :key="$route.params.work")

      //- close workpanel
      transition(name="fade")
        button.focus_outline-none(v-show="panelOpen", @click="$router.push('/')").absolute.overlay.bg-black.z-10.cursor-pointer.opacity-25.md_opacity-50

      //- MAIN
      main.index.relative.min-h-screen.transition.duration-500.transform.origin-left(:class="panelOpen ? panelWidths[0] : ''")
        //- HEADER
        header.sticky.h-14.bg-gray-200.top-0.left-0.w-full.z-20.text-white.pointer-events-none.flex.text-black.text-smm(style="mix-blend-modeff:difference")
          //- .absolute.top-0.left-0.w-full
            .flex.w-full.justify-between.items-center
          
          //- logo
          .flex-1.px-10.flex.items-center.md_px-12.pointer-events-auto
            div #[span.line-through NFT Shredder]
            //- button.focus_outline-none(@click="onLogoClick", aria-label="About Folia")
              logo.block.text-white.h-12.cursor-poiner(aria-label="Folia")
            //- svg-fleuron.block.text-white(style="height:3rem")
            
          router-link(to="/info").w-1x5.px-10.md_px-12.flex.items-center.justify-center.pointer-events-auto.bg-gray-300.hover_bg-gray-400.transition.duration-500
            | Info

          router-link(to="/filter").w-1x5.px-10.md_px-12.flex.items-center.justify-center.pointer-events-auto.hover_bg-gray-400.transition.duration-500
            | Filter
            

            //- connect
            //- div.pointer-events-auto
              button.p-10.focus_outline-none(v-if="!address", @click="$store.dispatch('connect')") Connect
              button.p-10.focus_outline-none.relative.group(v-else, @click="$store.dispatch('disconnect')")
                span.group-hover_opacity-0.truncate {{ address.slice(0, 6) + '...' + address.slice(-4) }}
                span.hidden.group-hover_block.absolute.overlay.text-right.p-10 Disconnect

        //- token grid
        .grid.grid-cols-5
          template(v-for="n in 100")
            //- thumbs...
            router-link.block.hover_bg-gray-300.transition.duration-1000(:class="{'bg-gray-50': !(n % 2), 'bg-gray-100': n % 2}", :to="'/works/' + n")
              .pb-full

        //- credits
        .bg-gray-200
          .w-3x5.text-sm.h-24.flex.items-center.px-12.opacity-25.justify-end Top &uarr;

        .sticky.bottom-0.left-0.w-full
          .absolute.bottom-0.left-0.w-full.h-24.flex.justify-end
            router-link.w-2x5.flex.items-center.justify-center.bg-gray-300.relative(to="/shred")
              div.text-sm Shred your NFTs ꩜
              .absolute.top-0.right-0.h-full.flex.items-center.px-10.pt-2 &rarr;
        

        //- info
        //- info.w-full.min-h-100vw.sm_min-h-50vw.lg_min-h-33vw(v-show="infoVisible && workDocs.length > 0")

</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Logo from '@/components/Logo'
import svgFleuron from '@/components/SVG-Fleuron'
// import Info from '@/components/Info'
// import WorkThumb from '@/components/WorkThumb'
import Btn from '@/components/Btn'
// import WorkView from '@/views/Work'
import Shred from '@/views/Shred'
import WorkView from '@/views/NFT'
import Info from '@/views/Info'
import Filters from '@/views/Filters'
import SetView from '@/views/Set'
import ViewToken from '@/views/ViewToken'
import LandingSlideWork from '@/components/LandingSlideWork'
import RichText from '@/components/RichText'
import linkResolver from '@/plugins/prismic/link-resolver'
import SliceTile from '@/slices/SliceTile'
import SliceAuctions from '@/slices/SliceAuctions'
import SliceAnnouncement from '@/slices/SliceAnnouncement'
import Observer from '@/components/Observer'
let lastRt
export default {
  name: 'Index',
  components: { SliceTile, Shred, WorkView, Filters, Logo, Info, svgFleuron, Btn, LandingSlideWork, ViewToken, SetView, RichText, SliceAuctions, SliceAnnouncement, Observer },
  data () {
    return {
      squish: false,
      infoVisible: true,
      // workPanel: this.$route.name === 'work',
      panelOpen: this.$route.meta.layout === 'panel',
      activeWork: this.$route.params.work,
      current: 0,
      panelWidths: [],
      carouselTimer: null
    }
  },
  computed: {
    ...mapState({
      home: state => state.prismic.docs.find(doc => doc.type === 'home')?.data,
      address: state => state.address,
      // doc: state => state.prismic.
      // workDocs: state => state.prismic.works,
      metadatas: state => state.metadatas
    }),
    ...mapGetters({
      workDocs: 'prismic/works',
      workId: 'workId'
    }),
    viewToken () {
      // return this.$route.name === 'view-token' ? this.$route.params.token : null
      return this.$route.name?.endsWith('-tokenviewer')
    },
    carouselEnabled () {
      return this.home?.landing.length > 1
    }
  },
  methods: {
    linkResolver,
    next () {
      this.current = this.current + 1 === this.workDocs.length ? 0 : this.current + 1
    },
    onLogoClick () {
      document.getElementById('info').scrollIntoView({ behavior: 'smooth' })
    },
    closeViewer () {
      return lastRt?.name ? this.$router.go(-1) : this.$router.push('/')
    },
    setPanelWidths () {
      // [body, work-panel]
      const wide = ['scale-x-10 sm_scale-x-20 lg_scale-x-33', 'w-9x10 sm_w-4x5 lg_w-2x3']
      const narrow = ['scale-x-50 lg_scale-x-60', 'w-1x2 lg_w-2x5']
      const isNarrow = ['filter', 'info'].includes(this.$route.name)
      this.panelWidths = isNarrow ? narrow : wide
    },
    openPanel () {
      this.setPanelWidths()
      this.panelOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeWorkPanel () {
      document.body.style.overflow = ''
      this.panelOpen = false
      setTimeout(() => this.setPanelWidths(), 700) // after transition
    },
    nextSlide (autoplay = true) {
      this.current = this.current + 1 === this.home.landing.length ? 0 : this.current + 1
      // autoplay carousel ?
      return autoplay ? this.autoplayCarousel() : this.pauseCarousel()
    },
    autoplayCarousel () {
      const interval = this.home?.landing_carousel_autoplay_interval // seconds
      const canPlay = interval > 0 && this.carouselEnabled && this.$route.name === 'index'
      if (canPlay) {
        // first time? pause on window.blur
        if (!this.carouselTimer) {
          window.addEventListener('blur', this.pauseCarousel)
        }
        // reset
        clearTimeout(this.carouselTimer)
        // queue
        this.carouselTimer = setTimeout(() => this.nextSlide(), interval * 1000)
      }
    },
    pauseCarousel () {
      clearTimeout(this.carouselTimer)
    }
  },
  beforeRouteEnter (to, from, next) {
    lastRt = from
    next()
  },
  beforeRouteUpdate (to, from, next) {
    lastRt = from
    next()
  },
  watch: {
    '$route' (to, from) {
      // open panel ?
      if (to.meta.layout === 'panel') {
        this.openPanel()
      }
      // index / no panel ?
      if (to.name === 'index') {
        this.closeWorkPanel()
        this.autoplayCarousel()
      } else {
        this.pauseCarousel()
      }
      // update active work ?
      if (to.params.work) {
        this.activeWork = to.params.work.toString()
      }
    },
    workDocs () {
      this.setPanelWidths()
    },
    home (doc) {
      if (doc) this.autoplayCarousel()
    }
  },
  created () {
    // prevent load on view (for now...)
    if (this.$route.name === 'view') {
      // this.$router.replace('/')
    }
  },
  metaInfo () {
    if (this.$route.name === 'index') {
      return {
        meta: this.$store.getters.meta({})
      }
    }
  }
}
</script>

<style scoped>
@import '../style/variables';

/* info transition */
.y-squish-enter-active,
.y-squish-leave-active{
  transition: transform 1000ms 600ms, max-height 1000ms 600ms;
  transform-origin:top center;
}
.y-squish-enter,
.y-squish-leave-to{
  transform:scale(1,0);
  max-height:0;
}
.y-squish-enter-to,
.y-squish-leave{
  max-height:calc(100vw / 3);
}

@media (--breakpoint-md) {
  /*.index.index--squished{transform:scale(0.25, 1);}*/
  /*.viewer{width:75%;}*/
}

@media (--breakpoint-lg) {
  /*.index.index--squished{transform:scale(0.5, 1);}*/
  /*.viewer{width:50%;}*/
}

.slide-enter-active,
.slide-leave-active{
  transition:transform 500ms;
}
.slide-leave-to,
.slide-enter{
  transform: scale(0,1);
}
.slide-leave-active{
  transform-origin: top left;
}
.slide-enter-active{
  transform-origin: top right;
}
</style>
