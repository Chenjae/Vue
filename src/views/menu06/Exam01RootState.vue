<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam01RootState
        </div>
        <div class="card-body">
            <h6>[Root State 읽기]</h6>
            <!-- $store.state : root 상태 -->
            <p>userId 단방향 바인딩: {{$store.state.userId}}</p>
            <p>userId 단방향 바인딩: {{$store.getters.getUserId}}</p>
            <p>userId 단방향 바인딩: {{getUserId()}}</p>
            <p>userId 단방향 바인딩: {{computedUserId}}</p>
            <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"/></p>

            <hr/>
            
            <h6>[Root State 변경]</h6>
            <p>Component userId 양방향 바인딩: <input type="text" v-model="userId"/></p>
            <div>
                <button class="btn btn-sm btn-info mr-2" @click="changeUserIdByMutation">userId 변경(Mutation 동기 방식)</button>
                <button class="btn btn-sm btn-info mr-2" @click="changeUserIdByAction">userId 변경(Action 비동기 방식)</button>
            </div>

            <hr/>
            <child/>
        </div>
    </div>    
</template>

<script>
import Child from "./Child.vue";
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam01RootState",
    //추가하고 싶은 컴포넌트 등록
    components: {
        Child,
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            userId: ""
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        getUserId() {
            //return this.$store.state.userId;

            //return this.$store.getters.getUserId;
            //root 상태가 아닌 하위 상태일 때는 무조건 아래와 같은 형태로 써야한다.
            return this.$store.getters["getUserId"];
        },
        changeUserIdByMutation() {
            //Mutation 실행은 commit
            this.$store.commit("setUserId", this.userId);

        },
        changeUserIdByAction() {
            //Action 실행은 dispatch
            this.$store.dispatch("setUserIdByAsync", {userId: this.userId, duration:3000});
        }
    },
    computed: {
        computedUserId() {
            return this.$store.state.userId;
            //return this.$store.getters.getUserId;
            //return this.$store.getters["getUserId"];
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>