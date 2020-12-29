<template>
  <i :class="'dm-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'DmIcon',

    props: {
      name: String
    }
  };
</script>
