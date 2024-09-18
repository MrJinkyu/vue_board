<template>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="isPrevPage">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('page',currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class="{active: currentPage === page}" v-for="page in pageCount" :key="page">
            <a class="page-link" href="#" @click.prevent="$emit('page',page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="isNextPage">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('page',currentPage + 1)">
              <span span aria-hidden="true">&raquo;</span>
            </a>
        </li>
      </ul>
    </nav>
</template>

<!-- 1.props 지정 -->
<!-- 2.coumputed 사용하여 class 깔끔하게 -->
<!-- 3.emit으로 props 변경하기  -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage:{
    require:true,
    type:Number,
  },
  pageCount:{
    require:true,
    type:Number,
  }
})

const isPrevPage = computed(() => ({disabled: ! (props.currentPage > 1)}));
const isNextPage = computed(() => ({disabled: ! (props.currentPage < props.pageCount)}));

defineEmits(['page']);
</script>

<style lang="scss" scoped>

</style>