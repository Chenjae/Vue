<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <model-dialog-template>
        <template v-slot:header>
        알림
        </template>

        <template v-slot:body>
            <div v-if="loading" class="mt-3">
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-if="!loading">{{message}}</div>
        </template>

        <template v-slot:footer>
            <button class="btn btn-info btn-sm" @click="$emit('close')">닫기</button>
        </template>
    </model-dialog-template>
</template>

<script>
import ModelDialogTemplate from '@/components/menu02/ModelDialogTemplate.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "AlertDialog",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ModelDialogTemplate
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    },
    props: [ "message", "loading" ]
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>