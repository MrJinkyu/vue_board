<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>
    <AppError v-if="error" :message="error.message"/>
    <PostForm @submit.prevent="save" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
          <button type="button" class="btn btn-outline-dark" @click="goListPage">목록</button>

          <button class="btn btn-primary" :disabled="loading">
            <template v-if="loading">
              <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
              <span class="visually-hidden" role="status">Loading...</span>
            </template>
            <template v-else>
              저장
            </template>
          </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { createPost } from '@/api/post';
import PostForm from '@/components/posts/PostForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
const router = useRouter();
const goListPage = () => router.push({name:'PostList'});
const form = ref({
  title:null,
  content:null,
})
const error = ref(null);
const loading = ref(false);
const { vAlert, vSuccess} = useAlert();
const save = async () => {
  try{
    loading.value = true
    await createPost({
      ...form.value,
      createdAt:Date.now(),
    });
    router.push({name:'PostList'});
    vSuccess('작성이 완료되었습니다!');
  }catch(err){
    error.value = err;
  }finally{
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>

</style>