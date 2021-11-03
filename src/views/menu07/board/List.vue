<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <div class="card">
        <div class="card-header">
            게시물 목록
        </div>
        <div class="card-body">
            <router-link class="btn btn-success btn-sm mb-2" to="/menu07/board/writeForm">글쓰기</router-link>
            <div v-if="page != null">
                <table class="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th class="text-center" style="width:70px">번호</th>
                        <th class="text-center">제목</th>
                        <th class="text-center" style="width:90px">글쓴이</th>
                        <th class="text-center" style="width:120px">날짜</th>
                        <th class="text-center" style="width:70px">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="board in page.boards" :key="board.bno">
                        <td class="text-center">{{board.bno}}</td>
                        <td class="text-center"><router-link :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`">{{board.btitle}}</router-link></td>
                        <td class="text-center">{{board.mid}}</td>
                        <td class="text-center">{{new Date(board.bdate).toLocaleDateString()}}</td>
                        <td class="text-center">{{board.bhitcount}}</td>
                    </tr>
                    <tr>
                        <td colspan="5" style="text-align: center;">
                            <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(1)">처음</button>
                            <button class="btn btn-outline-success btn-sm mr-1" v-if="page.pager.groupNo>1" 
                                    @click="changePageNo(page.pager.startPageNo-1)">이전</button>
                            <button :class="`btn ${(pageNo != page.pager.pageNo)?'btn-outline-secondary':'btn-success'} btn-sm mr-1`" v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" 
                                    :key="pageNo"
                                    @click="changePageNo(pageNo)">{{pageNo}}</button>
                            <button class="btn btn-outline-success btn-sm mr-1" v-if="page.pager.groupNo<page.pager.totalGroupNo" 
                                    @click="changePageNo(page.pager.endPageNo+1)">다음</button>
                            <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
                        </td>
                    </tr>
                </tbody>
                </table>  
            </div>
        </div>

        <alert-dialog v-if="alertDialog"
                      :loading="loading"
                      :message="alertDialogMessage"
                      @close="alertDialog=false"/>
    </div>    
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog";

export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "List",
    //추가하고 싶은 컴포넌트 등록
    components: {
        AlertDialog
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            alertDialog: false,
            alertDialogMessage: "",
            loading: false,
            page: null
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        changePageNo(pageNo) {
            //같은 컴포넌트 안에서 URL만 변경
            this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(()=>{});
            //URL만 변경하면 Watch에서 데이터를 가져옴
            //this.getBoardList(pageNo);
        },
        getBoardList(pageNo) {
            this.loading = true;
            this.alertDialog = true;
            board.getBoardList(pageNo)
                .then(response => {
                    console.log(response);
                    this.loading = false;
                    this.alertDialog = false;
                    this.page = response.data;
                })
                .catch(error => {
                    if(error.response) {
                        if(error.response.status === 403) {
                            this.loading = false;
                            this.alertDialog = false;
                            this.$router.push("/menu07/auth/jwtauth")
                        }
                    } else {
                        this.loading = false;
                        this.alertDialogMessage = "네트워크 통신 오류";
                    }
                });
        },
        range(start, end) {
            const arr = [];
            for(var i=start; i<=end; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
    created() {
        var pageNo = this.$route.query.pageNo;
        if(pageNo === "undefined") pageNo = 1;
        this.getBoardList(pageNo); 
    },
    watch:{
        //해당 라우트에서 주소가 바뀔 때 호출됨
        $route (to, from) {
            if(to.query.pageNo) {
                //URL 변경을 감시하는 watch에서 데이터를 변경함
                this.getBoardList(to.query.pageNo);
            } else {
                //pageNo가 없을 경우에 기본 1로 설정
                this.getBoardList(1);
            }
        }
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>