<template>
  <div class="card">
    <div class="card-header">
      HOME
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <hello-world/> <!-- template으로 정의한 내용이 javaScript로 변환되서 대입된다 -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
