<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam05View
        </div>
        <div class="card-body">
            <h6>params(path variable)로 전달</h6>
            <ul>
                <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
                <li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
                <li><router-link :to="{path:`/menu01/exam06view/${bno2}`}">exam06view/5</router-link></li>
                <li><router-link :to="{name:'menu01_exam06view', params:{bno:bno3}}">exam06view/7</router-link></li>
            </ul>

            <h6>정적 프롭 객체 전달</h6>
             <ul>
                <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
             </ul>

             <h6>쿼리 스트링으로 데이터 전달</h6>
             <ul>
                <li><router-link to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</router-link></li>
                <li><router-link :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=blue</router-link></li>
                <li><router-link :to="{path: `/menu01/exam08view?kind=${kind2}&color=${color2}`}">exam08view?kind=album&color=red</router-link></li>
                <li><router-link :to="{name: 'menu01_exam08view', query:{kind:kind3, color:color3}}">exam08view?kind=qa&color=yellow</router-link></li>
             </ul>
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
    //사용시 생성, 비동기 함수형태로 작성
    data: () => ({
        bno1: 3,
        bno2: 5,
        bno3: 7,
        kind1: "freeboard",
        kind2: "album",
        kind3: "qa",
        color1: "blue",
        color2: "red",
        color3: "yellow",
    }),
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>