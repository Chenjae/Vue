<template>
  <div class="card">
    <div class="card-header">
      About
    </div>
    <div class="card-body">
      <div class="about">
        This is an about page
      </div>
    </div>
  </div>
</template>
<!-- 위의 template 내용은 모두 javaScript로 변환된다. 따라서 안에 자바스크립트 변수를 사용할 수 있다 -->

<!-- vue파일을 module로 만든다. exprot default 안해도 자동으로 생성 -->
<script>
export default {
  name : "About"
}
</script>