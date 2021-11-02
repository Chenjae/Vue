<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
      <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2"/>Vue.js
    </router-link>
    <div>
      <router-link to="/menu07/auth/jwtauth" class="btn btn-success btn-sm" v-if="$store.state.userId === ''">로그인</router-link>
      <button @click="handleLogout" class="btn btn-success btn-sm" v-if="$store.state.userId !== ''">로그아웃</button>
    </div>
  </nav>
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
      handleLogout() {
        this.$store.dispatch("deleteAuth");
      }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>