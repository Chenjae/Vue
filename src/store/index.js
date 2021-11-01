import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vewx.Store : 상태를 저장하고 관리하는 객체
export default new Vuex.Store({
  //루트 상태 정의
  state: {
  },
  //루트 상태값을 읽는 메소드를 정의 (=getter)
  getters: {
  },
  //루트 상태값을 변경하는 메소드 정의, 동기 방식 처리 (=setter)
  mutations: {
  },
  //루트 상태값을 변경하는 메소드 정의, 비동기 방식 처리 (=setter)
  //언제 끝날지 모르는 메소드를 정의
  actions: {
  },
  //루트가 아닌 자식 상태를 정의한 모듈
  modules: {
  }
})
