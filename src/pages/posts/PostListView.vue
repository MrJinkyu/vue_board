<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit"/>
    <hr class="my-4"/>

    <AppLoading v-if="loading"/>
    <AppError v-else-if="error" :message="error.message"/>
    <template v-else>
      <AppGrid :items = posts>
        <template v-slot="{ item }">
          <PostItem @click="goPage(item.id)" :title="item.title" :content="item.content" :created-at="item.createdAt" @modal="openModal(item)"/>
        </template>
      </AppGrid>
      <AppPageNation :current-page="params._page" :page-count="pageCount" @page="(page) => params._page = page"/>
    </template>
    
  <Teleport to="#modal">
    <PostModal v-model="show" :title="modalTitle" :content="modalContent" :createdAt="modalCreatedAt"/>
  </Teleport>
    <template v-if="posts && posts.length > 0">
    <hr class="my-5">
    <AppCard>
      <PostDetailView :id="posts[0].id"/>
    </AppCard>
    </template>
    </div>
</template>

<script setup>
import { getPosts } from '@/api/post';
import PostItem from '@/components/posts/PostItem.vue';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppPageNation from '@/components/app/AppPageNation.vue';
import AppGrid from '@/components/app/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const router = useRouter();
const error = ref(null);
const loading = ref(false);
const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order:'desc',
  _page:1,
  _limit:3,
  title_like:'',
})
// pagenation
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit),)
const fetchPosts = async () => {
  try{
    loading.value = true;
    const {data, headers} = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  }catch (err){
    error.value = err;
  }finally{
    loading.value = false;
  }
}
const goPage = (id) => {
  router.push({name:'PostDetail',params:{id}});
}

watchEffect(fetchPosts);

const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({title, content, createdAt}) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreatedAt.value = createdAt;
}
</script>