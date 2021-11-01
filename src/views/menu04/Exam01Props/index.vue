<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam01Props
        </div>
        <div class="card-body">
            <!-- 숫자를 주기 위해 v-bind 처리한다. 
                prop 값을 케밥 케이스로도 줄 수 있다. -->
            <!-- v-bind로 부모 쪽에서 data로 정의된 데이터를 자식쪽으로 전달 -->
            <child-a :prop1="data1" 
                     :prop2="data2"
                     :productNo="pno"
                     :productKind="pkind"
                     product-price="100"/>
            <hr/>
            <child-b :product="product" v-bind="product"/>
            <hr/>
            <child-c :propA="3"
                     :propB="5"
                     :propC="7"
                     propD="string-Data"
                     :propE="9"
                     :propF="{message:'hello, vue'}"
                     :propG="['red', 'green', 'blue']"
                     :propI="15" />
        </div>
    </div>    
</template>

<script>
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';
import ChildC from './ChildC.vue';

export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam01Props",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ChildA,
        ChildB,
        ChildC
    },
    //컴포넌트 데이터 정의
    data: function() {
        //데이터를 자식 객체로 전달 (props)
        return {
            data1: "value1",
            data2: "value2",
            pno: "1",
            pkind: "bag",
            pprice: 1000,
            product: {
                no: 2,
                kind: "정장"
            }
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