<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam06ComputedBinding
        </div>
        <div class="card-body">
            <p>ssn1: {{ssn1}}</p>
            <p>ssn2: {{ssn2}}</p>
            <p>date: {{date}}</p>
            <p>ssn: {{ssn1}}-{{ssn2.charAt(0) + "******"}}</p>
            <p>ssn: {{getSsn()}}</p>
            <p>ssn: {{computedSsn}}</p>
             <button class="btn btn-sm btn-info" @click="changeData">변경</button>
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam06ComputedBinding",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            ssn1: "090929",
            ssn2: "1102345",
            date: new Date()
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        getSsn() {
            console.log("getSsn() 실행");
            const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
            return ssn;
        },
        changeData() {
            this.date = new Date();
        }
    },
    //값이 바뀔 경우 새로운 속성을 만든다.
    computed: {
        computedSsn() {
            console.log("computedSsn() 실행");
            const ssn = this.ssn1 + "-" + this.ssn2.charAt(0) + "******";
            return ssn;
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>