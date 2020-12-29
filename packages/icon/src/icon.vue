<template>
  <i :class="'dm-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'DMIcon',

    props: {
      name: String
    }
  };
</script>
