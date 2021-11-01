<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam01LifeCycleHook
        </div>
        <div class="card-body">
            <p>data: {{data}}</p>
            <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
            <hr/>
            <child :data="data"/>
        </div>
    </div>    
</template>

<script>
import Child from './Child.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam01LifeCycleHook",
    //추가하고 싶은 컴포넌트 등록
    components: {
        Child
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            data: 0
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        changeData() {
            this.data += Math.floor(10*Math.random());
        }
    },
    //LifeCycleHook 정의
    //인스턴스 생성시 작동
    beforeCreate() {
        console.log("beforeCreate state");
    },
    created() {
        console.log("created state");
    },
    //인스턴스를 화면에 부착시 작동
    beforeMount() {
        console.log("beforeMount state");
    },
    mounted() {
        console.log("mounted state");
    },
    //template가 리렌더링될 때 작동
    //1. 컴포넌트 데이터 변경
    //2. prop이 변경
    beforeUpdate() {
        console.log("beforeUpdate state");
    },
    updated() {
        console.log("updated state");
    },
    //인스턴스 소멸시 작동
    beforeDestroy() {
        console.log("beforeDestroy state");
    },
    destroyed() {
        console.log("destroyed state");
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>