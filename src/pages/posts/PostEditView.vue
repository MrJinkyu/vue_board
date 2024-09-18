<template>
  <AppLoading v-if="loading"/>
  <AppError v-else-if="error" :message="error.message"/>
  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4"/>
    <PostForm @submit.prevent="edit" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
          <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
          <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/post';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const route = useRoute();
const id = route.params.id;
const router = useRouter();
const { vAlert, vSuccess} = useAlert();
const form = ref({
  title:null,
  content:null,
});
const error = ref(null);
const loading = ref(false);

const setForm = ({title,content}) => {
  form.value.title = title;
  form.value.content = content;
}

const fetchPost = async () => {
  try{
    loading.value = true;
    const {data} = await getPostById(id);
    setForm(data);
  }catch(err){
    error.value = err;
  }finally{
    loading.value = false;
  }
};

const edit = async () => {
  try{
    await updatePost(id,{...form.value});
    router.push({name:"PostDetail",params:{id}});
    vSuccess('수정이 완료되었습니다!');
  }catch(error){
    vAlert(error.message);
  }
}

fetchPost();
const goDetailPage = () => router.push({name:'PostDetail',params:{id}});
</script>

<style scoped>

</style>