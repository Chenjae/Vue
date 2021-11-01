<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam05ForRepeatBinding
        </div>
        <div class="card-body">
            <h6>범위 반복</h6>
            <!-- for문안에서 if를 사용하기 위해 .eslintrc.js에 설정을 추가 -->
            <span v-for="n in 10" :key="n">
                <img :src="require(`@/assets/photos/photo${n}.jpg`)" height="150" class="m-1" v-if="n%2==0"/>
            </span>

            <hr/>
            <h6>배열 항목 반복</h6>
            <div>
                <span v-for="(photo, index) in photos" :key="index">
                    <img :src="require(`@/assets/photos/${photo}`)" height="150" class="m-1"/>
                </span>
            </div>

            <hr/>

            <h6>객체 배열 항목 반복</h6>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="board in boards" :key="board.bno">
                        <td v-if="board.bwriter==='글쓴이2'">{{board.bno}}</td>
                        <td v-if="board.bwriter==='글쓴이2'">{{board.btitle}}</td>
                        <td v-if="board.bwriter==='글쓴이2'">{{board.bwriter}}</td>
                        <td v-if="board.bwriter==='글쓴이2'">{{board.bdate}}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>    
</template>

<script>
import boardData from "@/data/Exam05board"
import photoData from "@/data/Exam05photo"

export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam05ForRepeatBinding",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            photos : photoData.photos,
            boards : boardData.boards
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