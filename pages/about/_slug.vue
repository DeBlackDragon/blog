<template>
  <AppLayout>
    <template #center>
      <article>
        <div class="text-md">
          <nuxt-content
            class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
            :document="about"
          />
        </div>
      </article>
    </template>
    <template #right>
      <div>Its me!</div>
      <div class="flex gap-2">
        <a href="https://www.linkedin.com/in/benjamin-dassow-457871164"
          >LinkedIn</a
        >
        <a href="https://www.xing.com/profile/Benjamin_Dassow/cv">Xing!</a>
        <a href="https://twitter.com/b_dassow">Twitter!</a>
      </div>
    </template>
  </AppLayout>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content("aboutme", params.slug).fetch();

    return {
      about,
    };
  },
};
</script>
