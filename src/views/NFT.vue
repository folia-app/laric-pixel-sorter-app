<template lang="pug">
  article.work.w-full.relative

    .flex.w-full
      //- main
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        .w-full.grid.grid-cols-2
          //- left col
          figure.bg-gray-200.group.relative
            //- .pb-full
            img.w-full.block(:src="`/demo/${$route.params.work}2.png`")
            //- original
            .absolute.overlay.z-10.transition.duration-1000.opacity-0.group-hover_opacity-100
              img.absolute.overlay.group-hover_animate-pulse2(:src="`/demo/${$route.params.work}1.png`")

          //- right col
          section.flex.flex-col.bg-gray-50
            header.p-8
              .flex.justify-between
                h1.line-throughff Decomposed Algoia
                div {{ '#' + $route.params.work }}
              div owner.eth
              div #[router-link(to="/").border-b.border-gray-300 Mutant Garden Seeder] #[sup.text-xs.text-gray-400 88]
              div.text-gray-400.text-sm.mt-8
                div color range: 168
                div rows: 144
                div density: 10
                div ...
            .flex-1
            footer.flex.justify-end.p-8.text-xxs.text-gray-300 OpenSea ↗

        footer
          h6.block.w-full.px-6.pt-48.pb-4.text-smm.border-tff.bg-gray-100
            | More from Mutant Garden Seeder
          .grid.grid-cols-4.items-end
            template(v-for="n in 'ABCDEFGHIJKLMNOPQR'.split('')")
              router-link.relative.group.block.transition.duration-1000(:to="'/works/' + n")

                img.w-full(:src="`/demo/${n}2.png`")

                //- original
                .absolute.overlay.z-10.transition.duration-1000.opacity-0.group-hover_opacity-100
                  img.absolute.overlay.group-hover_animate-pulse2(:src="`/demo/${n}1.png`")

          //- h6.p-8 More from "Collection"
          //- section.grid.grid-cols-4
            template(v-for="n in 88")
              router-link.block.relative.border-b.border-gray-100.hover_bg-gray-300.transition.duration-1000(:to="'/works/' + n", :class="{'bg-gray-50': !(n % 2), 'bg-gray-100': n % 2}")
                .pb-full
                  .absolute.overlay.flex.items-center.justify-center.text-sm.opacity-10 {{ n }}

          .sticky.z-10.bottom-0.left-0.w-full.h-24.flex.text-sm
            router-link.w-1x2.flex.items-center.justify-center.bg-gray-200(to="/")
              div &larr; View All
            router-link.w-1x2.flex.items-center.justify-center.bg-gray-300(to="/shred")
              div Mint / Decompose ꩜
</template>

<script>
export default {
  name: 'NFT'
}
</script>

<style>
</style>
