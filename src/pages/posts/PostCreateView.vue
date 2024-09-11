<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <PostForm @submit.prevent="save" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
        <div class="pt-4">
          <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
          <button class="btn btn-primary">저장</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { createPost } from '@/api/post';
import PostForm from '@/components/PostForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goListPage = () => router.push({name:'PostList'});
const form = ref({
  title:null,
  content:null,
})
const save = async () => {
  try{
    createPost({
      ...form.value,
      createdAt:Date.now(),
    });
    router.push({name:'PostList'});
  }catch(error){
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>

</style>