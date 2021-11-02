export default{
    //모듈의 이름을 루트 하위 네임스페이스로 설정
    namespaced: true,
    //상태 정의
    state: {
        count: 0
    },
    //상태값을 읽는 메소드를 정의 (=getter)
    getters: {
        //root 상태값에 접근하려면 rootState 사용
        getCount(state, getters, rootState, rootGetters) {
            return state.count;
        }
    },
    //상태값을 변경하는 메소드 정의, 동기 방식 처리 (=setter)
    mutations: {
        //context : state, rootState, getters, rootGetters, commit, dispatch
        setCount(state, payload) {
            state.count += payload;
        }
    },
    //상태값을 변경하는 메소드 정의, 비동기 방식 처리 (=setter)
    actions: {
        setCountByAsync(context, payload) { //payload = {value:xxx, duration:3000}
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("setCount", payload.value);
                    resolve(context.state.count);
                }, payload.duration);
            }).then((data) => {
                console.log(`counter/count 상태 변경 성공 : ${data}`);
            })
            .catch((err) => {
                console.log(`counter/count 상태 변경 실패 : ${err}`);
            });
        }
    }
}