<template>
  <AppLoading v-if="loading"/>
  <AppError v-else-if="error" :message="error.message"/>
  <div v-else>
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <p class="text-muted">{{post.createdAt}}</p>
    <hr class="my-4"/>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { deletePost, getPostById } from '@/api/post';
import { ref } from 'vue';
import {  useRouter } from 'vue-router';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const props = defineProps({
  id:[String,Number],
});

const router = useRouter();
const post = ref({});
const error = ref(null);
const loading = ref(false);

const setPost = ({title,content,createdAt}) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
}
const fetchPost = async () => {
  try{
    loading.value = true;
    const {data} = await getPostById(props.id);
    setPost(data);
  }catch(err){
    error.value = err;
  }finally{
    loading.value = false;
  }
};
fetchPost();
const goListPage = () => router.push({name:'PostList'});
const goEditPage = () => router.push({name:'PostEdit',params:{id:props.id}});
const remove = async () => {
  try{
    if(confirm('삭제 하시겠습니까?') === false){
      return;
    }
    await deletePost(props.id);
    router.push({name:'PostList'});
  }catch(error){
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>

</style>