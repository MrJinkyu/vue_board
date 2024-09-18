<template>
  <div class="row g-3">
      <div :class="colName" v-for="item in items" :key="item.id">
        <slot :item='item'></slot>
      </div>
  </div>
</template>

<script setup>
defineProps({
  items:{
    type:Array,
    required: true
  },
  colName:{
    type:String,
    default: 'col-4',
  }
})
</script>

<style lang="scss" scoped>

</style>