<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <model-dialog-template>
    <template v-slot:header>
      로그인
    </template>

    <template v-slot:body>
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" autocomplete="email">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" autocomplete="new-password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label">Check me out</label>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm" @click="$emit('close')">로그인</button>
      <button class="btn btn-info btn-sm" @click="$emit('close')">취소</button>
    </template>
    </model-dialog-template>
</template>

<script>
import ModelDialogTemplate from "@/components/menu02/ModelDialogTemplate.vue";
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "DialogB",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ModelDialogTemplate
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
    .modal-container {
        width: 800px;
    }
</style>