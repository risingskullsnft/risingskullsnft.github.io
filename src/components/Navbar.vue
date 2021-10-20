<template>
  <ul class="sticky text-right p-4 pr-4 font-semibold bg-transparent z-50">
    <li
      class="inline mx-2 text-blood hover:text-red-400 cursor-pointer"
      v-for="link in links"
      v-bind:key="link"
    >
      {{ link }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: [String],
  },
};
</script>

<!-- <style></style> -->