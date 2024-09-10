<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4"/>
    <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem @click="goPage(post.id)" :title="post.title" :content="post.content" :created-at="post.createdAt"/>
      </div>
    </div>
  </div>
  <hr class="my-4">
  <AppCard>
    <PostDetailView :id="1"/>
  </AppCard>
</template>

<script setup>
import { getPosts } from '@/api/post';
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';

const router = useRouter();
const posts = ref([]);
const fetchPosts = () => {
  posts.value = getPosts();
}
fetchPosts();
const goPage = (id) => {
  router.push({name:'PostDetail',params:{id}});
}
</script>

<style lang="scss" scoped>

</style>