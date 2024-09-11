import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/pages/HomeView.vue';
import AboutView from '@/pages//AboutView.vue';
import PostListView from '@/pages/posts/PostListView.vue';
import PostCreateView from '@/pages/posts/PostCreateView.vue';
import PostEditView from '@/pages/posts/PostEditView.vue';
import NotFoundView from '@/pages/NotFoundView.vue';
import NestedView from '@/pages/nested/NestedView.vue';
import NestedOneView from '@/pages/nested/NestedOneView.vue';
import NestedTwoView from '@/pages/nested/NestedTwoView.vue';
import NestedHomeView from '@/pages/nested/NestedHomeView.vue';
import PostDetailView from '@/pages/posts/PostDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    props: true,
    // props: (route) => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      { path: '', name: 'NestedHome', component: NestedHomeView },
      { path: 'one', name: 'NestedOne', component: NestedOneView },
      {
        path: 'Two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
