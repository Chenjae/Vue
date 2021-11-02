<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam01RootState
        </div>
        <div class="card-body">
            <h6>[Counter State 읽기]</h6>
            <!-- namespace:true 설정을 했기 때문에 $store.state.counter.~ 로 사용, 설정안할 경우에는 $store.state.~로 사용
                 $store.state.~로 사용할 경우에는 이름이 겹쳐 문제가 발생할 수 있다 -->
            <p>counter/count 단방향 바인딩: {{$store.state.counter.count}}</p>
            <!-- getter의 접근은 식별 이름을 통해 접근 가능 -->
            <p>counter/count 단방향 바인딩: {{$store.getters["counter/getCount"]}}</p>
            <p>counter/count 단방향 바인딩: {{getCount()}}</p>
            <p>counter/count 단방향 바인딩: {{computedCount}}</p>
            <p>counter/count 양방향 바인딩: <input type="text" v-model.number="$store.state.counter.count"/></p>

            <hr/>
            
            <h6>[Counter State 변경]</h6>
            <p>Component value 양방향 바인딩: <input type="text" v-model.number="value"/></p>
            <div>
                <button class="btn btn-sm btn-info mr-2" @click="changeCountByMutation">counter/count 변경(Mutation 동기 방식)</button>
                <button class="btn btn-sm btn-info mr-2" @click="changeCountByAction">counter/count 변경(Action 비동기 방식)</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam01RootState",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            value: 0
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        getCount() {
            return this.$store.state.counter.count;
            //root 상태가 아닌 하위 상태일 때는 무조건 아래와 같은 형태로 써야한다.
            //return this.$store.getters["counter/getCount"];
        },
        changeCountByMutation() {
            //Mutation 실행은 commit
            this.$store.commit("counter/setCount", this.value);

        },
        changeCountByAction() {
            //Action 실행은 dispatch
            this.$store.dispatch("counter/setCountByAsync", {value: this.value, duration:3000});
        }
    },
    computed: {
        computedCount() {
            //return this.$store.state.counter.count;
            return this.$store.getters["counter/getCount"];
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>