<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">GYM CODING</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/"
                active-class="active"
                >Home
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/about"
                active-class="active"
                >About</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/posts"
                active-class="active"
                >게시글</RouterLink
              >
            </li>
            <li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/nested">
								Nested
							</RouterLink>
						</li>
          </ul>
          <div class="d-flex" role="search">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const roter = useRouter();
const goPage = () => {
  roter.push({name:'PostCreate'});
}
</script>

<style lang="scss" scoped></style>
