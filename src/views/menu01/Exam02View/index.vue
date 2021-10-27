<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            <span class="title">Exam02View (non-scoped Style)</span>
        </div>
        <div class="card-body">
            
            <h6>프로그래밍 방식 화면 이동</h6>
            <button class="btn btn-sm btn-info mr-2" v-on:click="goUrl">/menu01/exam01view</button>
            <button class="btn btn-sm btn-info mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
            <button class="btn btn-sm btn-info mr-2" @click="goUrl">/menu01/exam01view</button>
            <button class="btn btn-sm btn-info" @click="goUrl()">/menu01/exam01view</button>
            <hr/>
            <SubAComponent class="mb-2"/>
        </div>
    </div>    
</template>

<script>
//추가할 컴포넌트
import SubAComponent from "./SubAComponent";

export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam02View",
    //추가하고 싶은 컴포넌트 등록
    components: {
        SubAComponent
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        //goUrl:function() {},
        //goUrl:() => {}, //this를 사용하지 못한다.
        goUrl() {
            //라우터에게 정보를 입력해, 위치를 이동시킨다.
            this.$router.push("/menu01/exam01view");

            //현재 URL과 동일한 URL로 화면 이동을 할 경우에는 에러가 발생하므로 예외 처리 코드가 필요하다 -> 
            //$router.push는 promise를 반환한다. 따라서 .catch를 작성해 실패시 함수를 실행시킨다
            //this.$router.push("/menu01/exam02view").catch(()=>{});

            //this.$router.push({path: "/menu01/exam01view"});
            //this.$router.push({name: "menu01_exam01view"});
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>