<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            ChildA
        </div>
        <div class="card-body">
            <p>prop1: {{prop1}}</p>
            <p>prop2: {{prop2}}</p>
            <p>productNo: {{productNo}}</p>
            <p>productKind: {{productKind}}</p>
            <p>productPrice: {{productPrice-1}}</p>
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ChildA",
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
    },
    //카멜 케이스로 작성해야한다.
    //부모에서 사용하려면 아래 5개의 props를 제공해야한다.
    props: [
        "prop1",
        "prop2",
        "productNo",
        "productKind",
        "productPrice"
    ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>