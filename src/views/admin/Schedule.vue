<template>
    <div class="schedule">
        <div class="content-title">
            <ul>
                <li><span id="all" ><a href="#">Hồ sơ shop</a></span></li>
                <li><span id="wait-confirm" class="choose"><a href="#">Lên lịch</a></span></li>
            </ul>
        </div>
        <div class="all-green btn-create-schedule"><button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Tạo lịch</button></div>
        <div class="create-schedule">
            <div class="frost"></div>
            <div class="box-create-schedule">
                <div class="all-red btn-close-schedule"><button>X</button></div>
                <h4 style="font-weight: bold; padding-top: 10px; padding-bottom:10px;">Tạo lịch bán hàng</h4>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nameproduct">Tiêu đề (*)</label>
                            <input type="text" class="form-control" id="nameproduct" name="nameproduct" placeholder="Tên lịch" require>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="start-sell">Thời gian bắt đầu bán (*)</label>
                            <input type="datetime-local" class="form-control" id="start-sell">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="description">Mô tả (*)</label>
                            <textarea class="form-control" id="description" rows="5" name="description" require></textarea>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="end-sell">Thời gian kết thúc bán (*)</label>
                                <input type="datetime-local" class="form-control" id="end-sell">
                            </div>
                            <div class="form-group">
                                <label for="time-ship">Thời gian ship (*)</label>
                                <input type="datetime-local" class="form-control" id="time-ship">
                            </div>
                        </div>
                    </div>
                    
                    <div class="all-green" style="text-align: center; margin-top:10px;"><button type="submit">Lưu lại</button></div>
                </form>
            </div>
        </div>
        <div class="table-schedule">
            <table>
                <thead>
                    <tr>
                        <td style="width: 10%;">Tên lịch</td>
                        <td style="width: 20%;">Mô tả</td>
                        <td style="width: 18%;">Thời gian kết thúc</td>
                        <td style="width: 18%;">Thời gian kết thúc</td>
                        <td style="width: 18%;">Thời gian ship</td>
                        <td>Thao tác</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span><strong>Thứ 2</strong></span>
                        </td>
                        <td>
                            <p>abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc</p>
                        </td>
                        <td>
                            <span>07:00 29/12/2029</span>
                        </td>
                        <td>
                            <span>12:00 29/12/2029</span>
                        </td>
                        <td>
                            <span>12:00 29/12/2029</span>
                        </td>
                        <td>
                            <span class="all-green"><button title="Đóng">Đang mở</button></span>
                            <span class="all-red"><button>Xóa</button></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span><strong>Thứ 2</strong></span>
                        </td>
                        <td>
                            <p>abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc</p>
                        </td>
                        <td>
                            <span>07:00 29/12/2029</span>
                        </td>
                        <td>
                            <span>12:00 29/12/2029</span>
                        </td>
                        <td>
                            <span>12:00 29/12/2029</span>
                        </td>
                        <td>
                            <span class="all-green"><button title="Mở" style="background-color: #EA7F29;">Đóng</button></span>
                            <span class="all-red"><button>Xóa</button></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
button{
    width: auto;
    height: 35px;
    /* font-weight: bold; */
    background-color: #fff;
    font-size: 14px;
    border: 0;
    outline: none !important;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
}
.green button {
    border: 2px solid #157D3F;
    color: #157D3F;
    cursor: pointer;
    border-radius: 5px;
}
.all-green button{
    background-color: #157D3F;
    color:#fff;
    border-radius: 5px;
}
.all-green button:hover{
    /* background-color: #1ea855; */
    box-shadow: 2px 2px 2px #999;
}
.all-red button{
    background-color: #cc0000;
    color:#fff;
    border-radius: 5px;
}
.all-red button:hover{
    /* background-color: #e94242; */
    box-shadow: 2px 2px 2px #999;
}
.red button {
    border: 2px solid #cc0000;
    color: #cc0000;
    cursor: pointer;
    border-radius: 5px;
}
.green button:hover{
    background-color: #157D3F;
    color: #fff;
}
.red button:hover{
    background-color: #cc0000;
    color: #fff;
}
/* create schedule */
.btn-create-schedule{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
}
.create-schedule{
    z-index: 3;
}
.frost{
    background-color: rgba(1, 1, 1, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.box-create-schedule{
    position: fixed;
    width: 800px;
    height: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 400px);
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 10px;
}
.btn-close-schedule{
    margin-top: 15px;
    margin-right: 15px;
    text-align: right;
}
.table-schedule{
    position: absolute;
    box-sizing: border-box;
    top: 150px;
    left: 0;
    width: 100%;
    height: calc(100% - 150px);
    background-color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: scroll;
    font-size: 14px;
    
}
.table-schedule tbody td{
    text-align: center;
    padding: 20px 10px;
}
.table-schedule tbody td p{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.table-schedule tbody td:last-child{
    float: right;
}
/* end create schedule */
</style>