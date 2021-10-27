<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            <span class="title">Exam01View (scoped Style)</span>
        </div>
        <div class="card-body">
            <h6>선언적 방식 화면 이동</h6>
            <router-link to="/menu01/exam02View" class="btn btn-sm btn-info mr-2">/menu01/exam02View</router-link>
            <router-link v-bind:to="`/menu01/exam02View`" class="btn btn-sm btn-info mr-2">/menu01/exam02View</router-link>
            <router-link :to="{path:'/menu01/exam02View'}" class="btn btn-sm btn-info mr-2">/menu01/exam02View</router-link>
            <router-link :to="{name:'menu01_exam02view'}" class="btn btn-sm btn-info mr-2">/menu01/exam02View</router-link>
            <div>
                <!-- prop : 컴포넌트에 데이터를 전달할 때 사용한다. 부모가 자식에게 데이터를 전달하는 방식
                <exam-06-view prop1="value1" prop2="value2"/> -->
            </div>
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
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<!-- scoped : 해당 싱글 파일 컴포넌트에서만 사용되는 style을 선언 -->
<!-- scoped가 생략되면 전역 style을 선언 (App.vue에 선언) -->
<style scoped>
    .title {
        color:orange;
    }
</style>