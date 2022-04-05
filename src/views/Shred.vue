<template lang="pug">
  article.shred.w-full.relative

    .flex.w-full
      //- main / left col
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        header
          h1.h-24.flex.w-full.items-center.justify-center.bg-gray-100
            | Decompose Your NFTs
        button.h-24.w-full.flex.items-center.justify-center.bg-gray-300 Connect Wallet

</template>

<script>
export default {
  name: 'Shred'
}
</script>

<style>
</style>
