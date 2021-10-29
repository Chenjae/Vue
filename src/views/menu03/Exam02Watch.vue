<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            Exam02Watch
        </div>
        <div class="card-body">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>
            <hr/>
            <form>      
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.name">
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Company</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.company">
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                    <input type="number" :class="`form-control ${bgColor}`" v-model.number="product.price">
                </div>
                </div>
            </form> 
            <hr/>
            <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>    
        </div>
    </div>    
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "Exam02Watch",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            userId: "user1",
            product: {
                name: "정장",
                company: "한섬",
                price: 1000000
            },
            bgColor: ""
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        handleButton() {
            //객체 자체를 변경
            this.product = {
                name: "정장2",
                company: "한섬2",
                price: 2000000
            };
        }
    },
    //watch
    //참조하는 객체의 데이터가 변경될 경우, 실행
    //감시할 객체명 : 함수로 정의
    //바꾸기 이전의 객체와 바뀐 후 새로 생성된 객체를 매개변수로 제공
    watch: {
        userId(newValue, oldValue) {
            console.log("newValue: ", newValue);
            console.log("oldValue: ", oldValue);
            console.log("this.userId: ", this.userId);
        },
        //객체일 때 watch
        //product의 값만 변경되고 객체 자체는 그대로 유지되기 때문에 위의 방법으로 했을 시에는 작동하지 않는다.
        product: {
            deep: true, //객체 안의 내용이 변경되는지 확인함
            handler(newValue, oldValue) {
                //product가 객체가 변경이 된 것이 아니라 값만 바뀌었기 때문에 이전 객체가 존재하지 않는다.
                //따라서, 현재 상태의 객체에 대한 내용만 출력 가능하다. 이전 객체의 내용은 얻을 수 없다.
                console.log("newValue: ", newValue);
                console.log("oldValue: ", oldValue);
            }
        },
        //객체의 인스턴스 하나만 변경을 감시
        "product.name"(newValue, oldValue) {
            console.log("newValue: ", newValue);
            console.log("oldValue: ", oldValue);
            console.log("this.product.name: ", this.product.name);
        },
        "product.price"(newValue, oldValue) {
            if(newValue<0) {
                this.bgColor = "bg-danger";
            } else if(newValue>=0 && newValue <= 100000) {
                this.bgColor = "bg-success"
            } else {
                this.bgColor = "bg-warning";
            }
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>