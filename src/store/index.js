import Vue from 'vue'
import Vuex from 'vuex'

import counter from "./counter";
import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex)

//Vewx.Store : 상태를 저장하고 관리하는 객체
export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: ""
  },
  //루트 상태값을 읽는 메소드를 정의 (=getter)
  getters: {
    getUserId(state) {
      return state.userId;
    }
  },
  //루트 상태값을 변경하는 메소드 정의, 동기 방식 처리 (=setter)
  mutations: {
    //context : state, rootState, getters, rootGetters, commit, dispatch
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    }
  },
  //루트 상태값을 변경하는 메소드 정의, 비동기 방식 처리 (=setter)
  //언제 끝날지 모르는 메소드를 정의
  actions: {
    //context : state, rootState, getters, rootGetters, commit, dispatch
    setUserIdByAsync(context, payload) { //payload = {userId:xxx, duration:1000}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId);
          //resolve : 성공이 되면 실행, then의 데이터로 대입이된다.
          resolve(context.state.userId);
        }, payload.duration);
      })
      .then((data) => {
        console.log(`userId 상태 변경 성공 + ${data}`);
      })
      .catch((err) => {
        console.log(`userId 상태 변경 성공 + ${err}`);
      });
    },

    saveAuth(context, payload) { 
      //상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);
      //브라우저 리프레시 때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);
      //로그인 성공 후에 모든 요청은 요청 헤더에 Authrization을 추가하도록 설정
      axiosConfig.addAuthHeader(payload.authToken);
    },

    //App.vue에서 실행
    //main.js에서는 실행할 수 없다 -> 아직 store가 생기지 않은 상태
    loadAuth(context, payload) {
      //세션 스토리지에 저장된 내용을 읽어서 상태 복원
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      //authToken이 있을 경우, Axios의 공통 헤더에 Authorization을 추가
      if(context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload) {
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      axiosConfig.removeAuthHeader();
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈
  modules: {
    counter
  },
})
