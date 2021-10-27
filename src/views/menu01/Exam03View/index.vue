<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam03View
        </div>
        <div class="card-body">
            <div>
                <h6>선언적 방식 화면 이동</h6>
                <router-link link to="/menu01/exam03view/subacomponent" class="btn btn-sm btn-info mr-2">SubAComponent</router-link>
                <router-link link to="/menu01/exam03view/subbcomponent" class="btn btn-sm btn-info">SubBComponent</router-link>
                <hr/>
                <h6 class="mt-2">프로그래밍 방식 화면 이동</h6>
                <button @click="goUrl('a')" class="btn btn-sm btn-info mr-2">SubAComponent</button>
                <button @click="goUrl('b')" class="btn btn-sm btn-info mr-2">SubBComponent</button>
            </div>
            <hr/>
            <div class="mt-2">
            <!-- 화면의 컴포넌트를 URL을 통해서 바꾼다 -->
                <router-view></router-view>
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
        goUrl(kind) {
            this.$router.push(`/menu01/exam03view/sub${kind}component`)
                .catch(() => {});
        }  
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>