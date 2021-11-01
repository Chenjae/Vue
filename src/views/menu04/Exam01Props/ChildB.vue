<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            ChildB
        </div>
        <div class="card-body">
            <h6> :product="product" </h6>
            <p>product.no: {{product.no}}</p>
            <p>product.kind : {{product.kind}}</p>
            <hr/>
            <h6> v-bind="product" </h6>
            <p>no : {{no}}</p>
            <p>kind : {{kind}}</p>
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "ChildB",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    props: [
        "product",
        "no",
        "kind"
    ],
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>