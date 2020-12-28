<template>
  <div style="margin: 20px;">
    <dm-date-picker type='datetime' v-model="input" placeholder="请输入内容"></dm-date-picker>
  </div>
</template>

<script>
import DatePicker from '../../packages/date-picker/index'

  export default {
    components: {
      'dm-date-picker': DatePicker
    },
    data() {
      return {
        input: ''
      };
    }
  };
</script>
