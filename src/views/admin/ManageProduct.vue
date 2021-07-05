<template>
  <div>
  
    <div class="content-seller" id="quanlysanpham" >
        <div class="content-title">
            <ul>
                <li><span id="all" class="choose"><a href="#">Tất cả</a></span></li>
                <li><span id="wait-confirm"><a href="#">Đang hoạt động</a></span></li>
                <li><span id="wait-ship"><a href="#">Hết hàng</a></span></li>
                <li><span id="order-done"><a href="#">Đã ẩn</a></span></li>
            </ul>
            <div class="add-product all-green"><button>+ Thêm sản phẩm</button></div>
        </div>
        <div class="row action-seller">
            <span class="col-md-4 col-sm-12 col-xs-12 search-page-user">
                <span class="icon-search-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></span>
                <input type="text" name="" id="" placeholder="Tìm kiếm tên sản phẩm" value="">
            </span>
            <span class="col-md-2 col-sm-0 col-xs-0"></span>
            <span class="col-md-6 col-sm-12 col-xs-12 green filter">
                <select name="" id="">
                    <option value="">Thể loại hàng</option>
                </select>
                <select name="" id="">
                    <option value="">Sắp xếp theo</option>
                    <option value="">Còn nhiều nhất</option>
                    <option value="">Bán được nhiều nhất</option>
                </select>
                <button>Lọc</button>
            </span>
        </div>
        <div class="quantity">
            <span style="font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;">12 Sản phẩm</span>
            <div style="margin-top:10px;">
                <span class="all-red" style="margin-right: 10px;"><button>Xóa</button></span>
                <span class="green" style="margin-top:15px;"><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button></span>
            </div>
            
        </div>
        <div class="table-product">
            <table>
                <thead>
                    <tr>
                        <td style="width: 5%; text-align:center;"><input type="checkbox"></td>
                        <td style="width: 30%;">Tên sản phẩm</td>
                        <td style="width: 15%;">Phân loại</td>
                        <td style="width: 18%;">Giá</td>
                        <td style="width: 10%;">Kho hàng</td>
                        <td style="width: 10%;">Đã bán</td>
                        <td>chỉnh sửa</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td class="product">
                            <a href="">
                                <span><img src="@/assets/quanlyshop.png" alt=""></span>
                                <span class="info-product">
                                    <strong>Tên sản phẩm</strong> 
                                </span>
                            </a>
                        </td>
                        <td class="category" style="text-align: center;">Thực phẩm</td>
                        <td class="price" style="text-align: right;">20.000 đ / đơn vị</td>
                        <td class="warehouse" style="text-align: center;">10</td>
                        <td class="sold" style="text-align: center;">20</td>
                        <td class="action">
                            <div class="green"><button style="height: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Sửa</button></div>
                            <div style="padding-top: 10px; cursor: pointer;" title="Ẩn"><span style="color:#01904a;">Hiển thị</span></div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td class="product">
                            <a href="">
                                <span><img src="@/assets/quanlyshop.png" alt=""></span>
                                <span class="info-product">
                                    <strong>Tên sản phẩm</strong> 
                                </span>
                            </a>
                        </td>
                        <td class="category" style="text-align: center;">Thực phẩm</td>
                        <td class="price" style="text-align: right;">20.000 đ / đơn vị</td>
                        <td class="warehouse" style="text-align: center;">10</td>
                        <td class="sold" style="text-align: center;">20</td>
                        <td class="action">
                            <div class="green"><button style="height: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Sửa</button></div>
                            <div style="padding-top: 10px; cursor: pointer;" title="Ẩn"><span style="color:#01904a;">Hiển thị</span></div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td class="product">
                            <a href="">
                                <span><img src="@/assets/quanlyshop.png" alt=""></span>
                                <span class="info-product">
                                    <strong>Tên sản phẩm</strong> 
                                </span>
                            </a>
                        </td>
                        <td class="category" style="text-align: center;">Thực phẩm</td>
                        <td class="price" style="text-align: right;">20.000 đ / đơn vị</td>
                        <td class="warehouse" style="text-align: center;">10</td>
                        <td class="sold" style="text-align: center;">20</td>
                        <td class="action">
                            <div class="green"><button style="height: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Sửa</button></div>
                            <div style="padding-top: 10px; cursor: pointer;" title="Hiển thị"><span style="color:#f4474b;">Ẩn</span></div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td class="product">
                            <a href="">
                                <span><img src="@/assets/quanlyshop.png" alt=""></span>
                                <span class="info-product">
                                    <strong>Tên sản phẩm</strong> 
                                </span>
                            </a>
                        </td>
                        <td class="category" style="text-align: center;">Thực phẩm</td>
                        <td class="price" style="text-align: right;">20.000 đ / đơn vị</td>
                        <td class="warehouse" style="text-align: center;"><span style="color: #f4474b;">hết hàng</span></td>
                        <td class="sold" style="text-align: center;">20</td>
                        <td class="action">
                            <div class="green"><button style="height: 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Sửa</button></div>
                            <div style="padding-top: 10px; cursor: pointer;" title="Ẩn"><span style="color:#01904a;">Hiển thị</span></div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="create-product" hidden>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nameproduct">Tên sản phẩm (*)</label>
                        <input type="text" class="form-control" id="nameproduct" name="nameproduct" placeholder="nhập tên sản phẩm" require>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="category">loại sản phẩm (*)</label>
                        <select id="category" class="form-control">
                            <option value="Cây cảnh" selected>Cây cảnh</option>
                            <option value="Đồ cũ">Đồ cũ</option>
                            <option value="Đồ dùng">Đồ dùng</option>
                            <option value="Thực phẩm">Thực phẩm</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="unit">Đơn vị tính (*)</label>
                        <select id="unit" class="form-control">
                            <option value="Cái" selected>Cái</option>
                            <option value="Gói">Gói</option>
                            <option value="Hộp">Hộp</option>
                            <option value="Kg">Kg</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="description">Giới thiệu (*)</label>
                        <textarea class="form-control" id="description" rows="5" name="description" require></textarea>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="unit-cost">Giá (*)</label>
                        <input type="text" class="form-control" id="unit-cost" name="unit-cost" placeholder="vnd" require>
                        <br>
                        <div>Giảm giá</div>
                        <input type="number" class="form-control" id="discount" name="discount" placeholder="%">
                        
                    </div>
                    <div class="form-group col-md-3">
                        <label for="quantity">Số lượng (*)</label>
                        <input type="number" class="form-control" id="quantity" name="quantity" require>
                        <br>
                        <div>Số lượng áp dụng</div>
                        <input type="number" class="form-control" id="quantity-discount" name="quantity-discount" >
                    </div>
                </div>
                <div class="form-row" style="padding-top: 20px;">
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-main" name="img-product-main" hidden>
                        <label for="img-product-main" class="added-img" id="img-pm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        <div style="font-weight:bold;">Ảnh chính (*)</div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-1" name="img-product-1" hidden>
                        <label for="img-product-1" id="img-p1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        
                        <div>Hình ảnh 1</div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-2" name="img-product-2" hidden>
                        <label for="img-product-2" id="img-p2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        <div>Hình ảnh 2</div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-3" name="img-product-3" hidden>
                        <label for="img-product-3" id="img-p3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        <div>Hình ảnh 3</div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-4" name="img-product-4" hidden>
                        <label for="img-product-4" id="img-p4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        <div>Hình ảnh 4</div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="file" id="img-product-5" name="img-product-5" hidden>
                        <label for="img-product-5" id="img-p5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></label>
                        <div>Hình ảnh 5</div>
                    </div>
                </div>
                <div class="all-green" style="text-align: center; margin-top:10px;"><button type="submit">Lưu lại</button></div>
            </form>
        </div>
    </div>

  </div>
</template>
<script>
export default {

};
</script>

