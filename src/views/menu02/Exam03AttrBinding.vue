<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam03AttrBinding
        </div>
        <div class="card-body">
            <p>
                <img :src="require(`@/assets/photos/${imgName1}`)" height="150" class="mr-2"/>
                <img v-bind:src="require(`@/assets/photos/${imgName2}`)" height="150" class="mr-2"/>
            </p>
            <div>
                <p v-bind:class="className">아름다운 풍경</p>
                <p :style="css">가을에는 Vue를 공부하고 싶어요.</p>
            </div>
            <button class="btn btn-sm btn-info" v-on:click="changeData">변경</button>
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam03AttrBinding",
    //추가하고 싶은 컴포넌트 등록
    components: {

    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            imgName1: "photo1.jpg",
            imgName2: "photo2.jpg",
            tagId: "id1",
            className: "class1",
            css: "color:blue;",
            toggle: true
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        changeData() {
            if(this.toggle) {
                this.imgName1 = "photo3.jpg";
                this.imgName2 = "photo4.jpg";
                this.className = "class2";
                this.css = "color: red;";
            } else {
                this.imgName1 = "photo1.jpg";
                this.imgName2 = "photo2.jpg";
                this.className = "class1";
                this.css = "color: blue";
            }
            this.toggle = !this.toggle;
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
    .class1 {
        color: red;
    }
    .class2 {
        color: green;
    }
</style>