<template>
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input type="text" :value="title" @input="$emit('update:title',$event.target.value)" placeholder="제목을 입력해주세요." class="form-control">
        </div>
        <div class="col">
          <select :value="limit" @input="$emit('update:limit',$event.target.value)" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
</template>

<script setup>
defineProps({
  title:{
    type:String,
  },
  limit:{
    type:[String,Number],
  }
})

defineEmits(['update:title','update:limit']);
</script>

<style lang="scss" scoped>

</style>