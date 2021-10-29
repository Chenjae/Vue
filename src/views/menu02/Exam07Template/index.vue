<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam07Template
        </div>
        <div class="card-body">
            <button class="btn btn-sm btn-info mr-2" @click="modalDialogTemplate=true">Show ModalDialogTemplate</button>
            <button class="btn btn-sm btn-info mr-2" @click="dialogA=true">Show dialogA</button>
            <button class="btn btn-sm btn-info mr-2" @click="dialogB=true">Show dialogB</button>
        </div>
        <!-- emit('close')를 통해 발생한 이벤트를 처리 -->
        <modal-dialog-template v-if="modalDialogTemplate" @close="modalDialogTemplate=false"/>
        <dialog-a v-if="dialogA" @close="dialogA=false"/>
        <!-- dialogb의 스타일 override를 위해 class 정의 -->
        <dialog-b class="dialogb" v-if="dialogB" @close="dialogB=false"/>
    </div>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModelDialogTemplate.vue"
import DialogA from "./DialogA.vue"
import DialogB from "./DialogB.vue"

export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam07Template",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ModalDialogTemplate,
        DialogA,
        DialogB
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            modalDialogTemplate: false,
            dialogA: false,
            dialogB: false
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<!-- dialogb의 스타일 오버라이딩 -->
<style>
    #app .dialogb .modal-container {
        width: 600px;
    }
</style>
<style scoped>
    
</style>