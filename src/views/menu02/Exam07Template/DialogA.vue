<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>  
    <model-dialog-template>
        <template v-slot:header>
            DialogA
        </template>

        <template v-slot:body>
            <p>DialogA 내용</p>
        </template>
        
        <template v-slot:footer>
            <button class="btn btn-sm btn-info mr-2" @click="$emit('close')">확인</button>
            <button class="btn btn-sm btn-info mr-2" @click="$emit('close')">닫기</button>
        </template>
    </model-dialog-template>
</template>

<script>
import ModelDialogTemplate from "@/components/menu02/ModelDialogTemplate.vue"
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "DialogA",
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
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
</style>