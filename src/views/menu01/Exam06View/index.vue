<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam06View
        </div>
        <div class="card-body">
            <h6>params(path variable)로 데이터 얻기</h6>
            <hr/>
            <!--router 객체가 아니라 route,
            router는 index.js에서 만든 VueRouter 객체,
            route는 url에 대한 정보를 갖고 있는 객체-->
            <h6>route 사용</h6>
            <div>bno : {{$route.params.bno}}</div>
            <hr/>
            <h6>props 사용</h6>
            <div>bno : {{bno}}</div>

        </div>
    </div>    
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
    },
    //컴포넌트가 생성될 때 실행
    created() {
        console.log("Exam06View 컴포넌트가 생성됨");
        //자바스크립트에서 작성할 때에는 this를 붙여줘야한다.
        console.log(this.$route);
        console.log(this.$route.params.bno);
    },
    //attribute와 같은 의미
    //컴포넌트에 데이터를 전달할 때 사용한다. 부모가 자식에게 데이터를 전달하는 방식
    //router설정 -> props: true -> bno의 값을 prop으로 받는다
    props: [
       "bno"
    ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>