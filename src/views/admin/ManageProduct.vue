<template>
  <div>
         <HeaderSale  class="headerSale"/>
       <Nav />
    <div class="content-seller" id="quanlysanpham">
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab id="all" title="Tất cả" active>
            <div class="add-product all-green" id="add-new-product">
              <button id="btn-add-product">+ Thêm sản phẩm</button>
            </div>
            <div>
              <div class="row action-seller">
                <span class="col-md-4 col-sm-12 col-xs-12 search-page-user">
                  <span class="icon-search-in"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      /></svg
                  ></span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Tìm kiếm tên sản phẩm"
                    value=""
                  />
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
                <span
                  style="font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;"
                  >12 Sản phẩm</span
                >
                <div style="margin-top:10px;">
                  <span class="all-red" style="margin-right: 10px;"
                    ><button>Xóa</button></span
                  >
                  <span class="green" style="margin-top:15px;"
                    ><button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-repeat"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                        />
                      </svg></button
                  ></span>
                </div>
              </div>
              <div class="table-product">
                <table>
                  <thead>
                    <tr>
                      <td style="width: 5%; text-align:center;">
                        <input type="checkbox" />
                      </td>
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
                      <td><input type="checkbox" /></td>
                      <td class="product">
                        <a href="">
                          <span><img src="" alt=""/></span>
                          <span class="info-product">
                            <strong>Tên sản phẩm</strong>
                          </span>
                        </a>
                      </td>
                      <td class="category" style="text-align: center;">
                        Thực phẩm
                      </td>
                      <td class="price" style="text-align: center;">
                        20.000 đ / đơn vị
                      </td>
                      <td class="warehouse" style="text-align: center;">
                        10
                      </td>
                      <td class="sold" style="text-align: center;">20</td>
                      <td class="action">
                        <div class="green">
                          <button style="height: 25px;">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                            Sửa
                          </button>
                        </div>
                        <div
                          style="padding-top: 10px; cursor: pointer;"
                          title="Ẩn"
                        >
                          <span style="color:#01904a;">Hiển thị</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td class="product">
                        <a href="">
                          <span><img src="" alt=""/></span>
                          <span class="info-product">
                            <strong>Tên sản phẩm</strong>
                          </span>
                        </a>
                      </td>
                      <td class="category" style="text-align: center;">
                        Thực phẩm
                      </td>
                      <td class="price" style="text-align: center;">
                        20.000 đ / đơn vị
                      </td>
                      <td class="warehouse" style="text-align: center;">
                        10
                      </td>
                      <td class="sold" style="text-align: center;">20</td>
                      <td class="action">
                        <div class="green">
                          <button style="height: 25px;">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                            Sửa
                          </button>
                        </div>
                        <div
                          style="padding-top: 10px; cursor: pointer;"
                          title="Ẩn"
                        >
                          <span style="color:#01904a;">Hiển thị</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td class="product">
                        <a href="">
                          <span><img src="" alt=""/></span>
                          <span class="info-product">
                            <strong>Tên sản phẩm</strong>
                          </span>
                        </a>
                      </td>
                      <td class="category" style="text-align: center;">
                        Thực phẩm
                      </td>
                      <td class="price" style="text-align: center;">
                        20.000 đ / đơn vị
                      </td>
                      <td class="warehouse" style="text-align: center;">
                        10
                      </td>
                      <td class="sold" style="text-align: center;">20</td>
                      <td class="action">
                        <div class="green">
                          <button style="height: 25px;">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                            Sửa
                          </button>
                        </div>
                        <div
                          style="padding-top: 10px; cursor: pointer;"
                          title="Hiển thị"
                        >
                          <span style="color:#f4474b;">Ẩn</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td class="product">
                        <a href="">
                          <span><img src="" alt=""/></span>
                          <span class="info-product">
                            <strong>Tên sản phẩm</strong>
                          </span>
                        </a>
                      </td>
                      <td class="category" style="text-align: center;">
                        Thực phẩm
                      </td>
                      <td class="price" style="text-align: center;">
                        20.000 đ / đơn vị
                      </td>
                      <td class="warehouse" style="text-align: center;">
                        <span style="color: #f4474b;">hết hàng</span>
                      </td>
                      <td class="sold" style="text-align: center;">20</td>
                      <td class="action">
                        <div class="green">
                          <button style="height: 25px;">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                            Sửa
                          </button>
                        </div>
                        <div
                          style="padding-top: 10px; cursor: pointer;"
                          title="Ẩn"
                        >
                          <span style="color:#01904a;">Hiển thị</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="create-product">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="nameproduct">Tên sản phẩm (*)</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nameproduct"
                        name="nameproduct"
                        placeholder="nhập tên sản phẩm"
                        require
                      />
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
                      <textarea
                        class="form-control"
                        id="description"
                        rows="5"
                        name="description"
                        require
                      ></textarea>
                    </div>
                    <div class="form-group col-md-3">
                      <label for="unit-cost">Giá (*)</label>
                      <input
                        type="text"
                        class="form-control"
                        id="unit-cost"
                        name="unit-cost"
                        placeholder="vnd"
                        require
                      />
                      <br />
                      <div>Giảm giá</div>
                      <input
                        type="number"
                        class="form-control"
                        id="discount"
                        name="discount"
                        placeholder="%"
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="quantity">Số lượng (*)</label>
                      <input
                        type="number"
                        class="form-control"
                        id="quantity"
                        name="quantity"
                        require
                      />
                      <br />
                      <div>Số lượng áp dụng</div>
                      <input
                        type="number"
                        class="form-control"
                        id="quantity-discount"
                        name="quantity-discount"
                      />
                    </div>
                  </div>
                  <div
                    class="form-row"
                    style="padding-top: 20px; display: flex;"
                  >
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-main"
                        name="img-product-main"
                        hidden
                      />
                      <label
                        for="img-product-main"
                        class="added-img"
                        id="img-pm"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>
                      <div style="font-weight:bold;">Ảnh chính (*)</div>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-1"
                        name="img-product-1"
                        hidden
                      />
                      <label for="img-product-1" id="img-p1"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>

                      <div>Hình ảnh 1</div>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-2"
                        name="img-product-2"
                        hidden
                      />
                      <label for="img-product-2" id="img-p2"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>
                      <div>Hình ảnh 2</div>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-3"
                        name="img-product-3"
                        hidden
                      />
                      <label for="img-product-3" id="img-p3"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>
                      <div>Hình ảnh 3</div>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-4"
                        name="img-product-4"
                        hidden
                      />
                      <label for="img-product-4" id="img-p4"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>
                      <div>Hình ảnh 4</div>
                    </div>
                    <div class="form-group col-md-2">
                      <input
                        type="file"
                        id="img-product-5"
                        name="img-product-5"
                        hidden
                      />
                      <label for="img-product-5" id="img-p5"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-arrow-up-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                          /></svg
                      ></label>
                      <div>Hình ảnh 5</div>
                    </div>
                  </div>
                  <div
                    class="all-green"
                    style="text-align: center; margin-top:10px;"
                  >
                    <button type="submit">Lưu lại</button>
                  </div>
                </form>
              </div>
            </div>
          </b-tab>
          <b-tab id="wait-confirm" title="Đang hoạt động">
            <div class="quantity">
              <span
                style="font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;"
                >12 Sản phẩm</span
              >
              <div style="margin-top:10px;">
                <span class="all-red" style="margin-right: 10px;"
                  ><button>Xóa</button></span
                >
                <span class="green" style="margin-top:15px;"
                  ><button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-repeat"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                      />
                    </svg></button
                ></span>
              </div>
            </div>
            <div class="table-product">
              <table>
                <thead>
                  <tr>
                    <td style="width: 5%; text-align:center;">
                      <input type="checkbox" />
                    </td>
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
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Hiển thị"
                      >
                        <span style="color:#f4474b;">Ẩn</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      <span style="color: #f4474b;">hết hàng</span>
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
          <b-tab id="wait-ship" title="Hết hàng">
            <div class="quantity">
              <span
                style="font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;"
                >12 Sản phẩm</span
              >
              <div style="margin-top:10px;">
                <span class="all-red" style="margin-right: 10px;"
                  ><button>Xóa</button></span
                >
                <span class="green" style="margin-top:15px;"
                  ><button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-repeat"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                      />
                    </svg></button
                ></span>
              </div>
            </div>
            <div class="table-product">
              <table>
                <thead>
                  <tr>
                    <td style="width: 5%; text-align:center;">
                      <input type="checkbox" />
                    </td>
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
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Hiển thị"
                      >
                        <span style="color:#f4474b;">Ẩn</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      <span style="color: #f4474b;">hết hàng</span>
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
          <b-tab id="order-done" title="Đã ẩn">
            <div class="quantity">
              <span
                style="font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;"
                >12 Sản phẩm</span
              >
              <div style="margin-top:10px;">
                <span class="all-red" style="margin-right: 10px;"
                  ><button>Xóa</button></span
                >
                <span class="green" style="margin-top:15px;"
                  ><button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-repeat"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                      />
                    </svg></button
                ></span>
              </div>
            </div>
            <div class="table-product">
              <table>
                <thead>
                  <tr>
                    <td style="width: 5%; text-align:center;">
                      <input type="checkbox" />
                    </td>
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
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      10
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Hiển thị"
                      >
                        <span style="color:#f4474b;">Ẩn</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td class="product">
                      <a href="">
                        <span><img src="" alt=""/></span>
                        <span class="info-product">
                          <strong>Tên sản phẩm</strong>
                        </span>
                      </a>
                    </td>
                    <td class="category" style="text-align: center;">
                      Thực phẩm
                    </td>
                    <td class="price" style="text-align: center;">
                      20.000 đ / đơn vị
                    </td>
                    <td class="warehouse" style="text-align: center;">
                      <span style="color: #f4474b;">hết hàng</span>
                    </td>
                    <td class="sold" style="text-align: center;">20</td>
                    <td class="action">
                      <div class="green">
                        <button style="height: 25px;">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          Sửa
                        </button>
                      </div>
                      <div
                        style="padding-top: 10px; cursor: pointer;"
                        title="Ẩn"
                      >
                        <span style="color:#01904a;">Hiển thị</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
        </b-tabs>
      </div> 
    </div>
  </div>
</template>

<script>
import HeaderSale from "@/components/sale/HeaderSale.vue";
import Nav from "@/components/sale/Nav.vue";
import $ from "jquery";

export default {
  components: {
    HeaderSale,
    Nav,
  },

  mounted() {
    $(".create-product").hide();

    $("#add-new-product").click(function() {
      if ($("#btn-add-product").text() === "+ Thêm sản phẩm") {
        $("#btn-add-product").text("- Hủy");
        $("#btn-add-product").css("background-color", "red");

        $(".row action-seller").hide();
        $(".quantity").hide();
        $(".table-product").hide();
        $(".create-product").show();
      } else {
        $("#btn-add-product").text("+ Thêm sản phẩm");
        $("#btn-add-product").css("background-color", "#157d3f");

        $(".row action-seller").show();
        $(".quantity").show();
        $(".table-product").show();
        $(".create-product").hide();
      }
    });
  },
};
</script>

<style scoped>
/* css for button */

.headerSale{
   position: -webkit-sticky;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  
}
button {
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
#add-new-product {
  width: fit-content;
}
.green button {
  border: 2px solid #157d3f;
  color: #157d3f;
  cursor: pointer;
  border-radius: 5px;
}
.all-green button {
  background-color: #157d3f;
  color: #fff;
  border-radius: 5px;
}
.all-green button:hover {
  /* background-color: #1ea855; */
  box-shadow: 2px 2px 2px #999;
}
.all-red button {
  background-color: #cc0000;
  color: #fff;
  border-radius: 5px;
}
.all-red button:hover {
  /* background-color: #e94242; */
  box-shadow: 2px 2px 2px #999;
}
.red button {
  border: 2px solid #cc0000;
  color: #cc0000;
  cursor: pointer;
  border-radius: 5px;
}
.green button:hover {
  background-color: #157d3f;
  color: #fff;
}
.red button:hover {
  background-color: #cc0000;
  color: #fff;
}
/* end button css 
 
 
/* create product */
.create-product {
  padding: 50px 30px;
}
.create-product input[type="file"] + label {
  width: 100px;
  height: 100px;
  border: 1px dashed #157d3f;
  color: #157d3f;
  cursor: pointer;
  text-align: center;
  line-height: 100px;
  font-weight: 100;
  box-sizing: border-box;
  padding: 0;
}
.create-product input[type="file"] + label:hover {
  background-color: #eee;
}
label img {
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
}
/* end create product */

/* table detail all */
.table-detail {
  position: static;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 150px);
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
  font-size: 14px;
}
.table-product {
  position: absolute;
  box-sizing: border-box;
  top: 13rem;
  left: 0;
  width: 100%;
  height: calc(100% - 150px);
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
  font-size: 14px;
}
.table-detail table,
.table-product table {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
table thead {
  height: 50px;
  border-bottom: 1px solid #ddd;
}
thead td {
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
}
/* thead td:first-child{
    text-align: left;
    padding-left: 80px;
} */
tbody tr {
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
.table-product tbody td:first-child {
  text-align: center;
}
table img {
  width: 90px;
  height: 60px;
}
tbody .product {
  display: inline-flex;
  padding: 20px 20px;
}
/* table tbody */
tbody .info-product {
  padding-left: 20px;
}
tbody .total-detail,
tbody .order-date,
tbody .status {
  text-align: center;
}
tbody .action {
  text-align: right;
}
.status {
  font-weight: bold;
}
.complete {
  color: #01904a;
}
.waiting {
  color: #f29c08;
}
.chogiao {
  color: #2165a4;
}
.delete {
  color: #f4474b;
}
/* end table detail all */

/* content*/
.content-seller {
  position: absolute;
  box-sizing: border-box;
  top: 90px;
  left: 300px;
  width: calc(100% - 350px);
  /* height: calc(100% - 90px); */
  min-height: calc(100% - 90px);
  height: auto;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  color: #333;
}
.content-title {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: inline-flex;
  justify-content: space-between;
}
.add-product {
  margin-top: 15px;
  font-size: 16px;
}
ul {
  padding-left: 20px;
}
ul li {
  list-style: none;
  display: inline-block;
  /* margin-right: 40px; */
  padding-top: 20px;
}
ul li a {
  padding-left: 40px;
  padding-right: 40px;
}
li .choose a {
  color: #157d3f;
  border-bottom: 3px solid #157d3f;
  padding-bottom: 6px;
  font-weight: bold;
}
.action-seller {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
}
.quantity {
  display: flex;
  justify-content: space-between;
}

/* custome css  */
body {
  margin: 0;
  background-color: #f1f1f1 !important;

  font-size: 16px;
}
a {
  text-decoration: none;
  color: #333;
}
input {
  outline: none;
  height: 35px;
  border: 1px solid #ccc;
}
a:visited {
  text-decoration: none !important;
  color: #333;
}

a:hover {
  text-decoration: none;
  color: #333;
}
.search-page-user {
  display: inline-flex;
}
.search-page-user input {
  height: 35px;
  width: 100%;
  background-color: #ddd;
  border: 0;
  padding-left: 10px;
  outline: none;
}
.filter {
  display: inline-flex;
  justify-content: space-between;
}
.filter select {
  height: 35px;
  width: 40%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.icon-search-in {
  height: 35px;
  padding-left: 10px;
  background-color: #ddd;
}
.icon-search-in svg {
  height: 35px;
  background-color: #ddd;
  color: #666;
}
input[type="date"] {
  height: 35px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding-left: 20px;
  outline: none;
}
::placeholder {
  font-size: 14px;
  color: #666;
  text-align: center;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: #ddd;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 5px;
}
/* end custome css  */
</style>