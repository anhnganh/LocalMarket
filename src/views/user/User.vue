<template>
    <div class="user-page">
        <Header></Header>
        <div class="container">
            <div class="navbar">
                <div class="u-info">
                    <div class="u-info-img">
                        <img src="../../assets/avatar.jpg" alt="Image" style="width: 45px; height: 45px">
                    </div>
                    <div class="u-info-text">
                        <p>Username</p>
                        <a href="#">Chỉnh sửa sau</a>
                    </div>
                </div>
                <div class="line"></div>

                <div class="u-menu">
                    <a href="http://localhost:8000" class="u-menu-item">
                        <div class="item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </div>
                        <div class="item-text">Thông tin cá nhân</div>
                    </a>

                    <a href="http://localhost:8000/user.history" class="u-menu-item">
                        <div class="item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                        </div>
                        <div class="item-text">Lịch sử mua hàng</div>
                    </a>

                    <a href="http://localhost:8000/user.notification" class="u-menu-item">
                        <div class="item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </div>
                        <div class="item-text">Thông báo</div>
                    </a>
                </div>
            </div>

            <div class="content">
                <div class="content-header">
                    <div class="content-header-title">Chỉnh sửa thông tin</div>
                    <div class="content-header-desc">abc</div>
                    <div class="line"></div>

                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default ({
    components: {
        Header,
    },
})
</script>
<style scoped>
.user-page{
    background-color: #f1f1f1;
    height: 100%;
    width: 100%;
    position: fixed;
}
body {
    background-color: #F1F1F1;
    font-family: Arial, Helvetica, sans-serif;
}

.header {
    width: 100%;
    height: 90px;
    background-color: #157D3F;
    margin-bottom: 3px;
}

.menu {
    width: 90%;
    height: 50px;
    background-color: #157D3F;
    margin: 3px auto;
}


/* Global style -- Can be replaced -- End */

/* Body content of user page -- Remain -- Start */
.navbar {
    width: 24%;
    margin-right: 1%;
    padding-top: 1%;
}

.content {
    width: 75%;
    background-color: #ffffff;
    padding: 1%;
    padding-bottom: 200px;
}
/* Body content of user page -- Remain -- End */

/* Menu bar -- start */
.u-info {
    display: inline-flex;
    height: 50px;
    padding-bottom: 5px;
    width: 100%;
}

.u-info-img {
    margin-right: 5%;
    width: 50px;
    height: 50px;
}

.u-info-img > img {
    border-radius: 50%;
    
}

.u-info-text {
    align-content: center;
}

.u-info-text > p {
    line-height: 0;
    font-weight: bold;
    font-size: 14px;
    margin-top: 15px;
    color: #222;
}

.u-info-text > a {
    font-size: 13px;
    text-decoration: none;
    color: #222;
}

.u-info-text > a:hover{
    font-style: italic;
}

.u-menu {
    margin-top: 25px;
}

.u-menu-item {
    width: 100%;
    margin-bottom: 3px;
    padding: 2% 3%;
    align-items: center;
    background-color: white;
    display: inline-flex;
    font-size: 15px;
    text-decoration: none;
    color: #222;
}

.u-menu-item:hover {
 
    text-decoration: none;
    color: #222;
    background-color: #DDD;
}

.item-icon {
    margin-right: 5%;
}
.u-info-text{
    width: 100%;
}
.item-text{
    width: 100%;
}
/* Menu bar -- end */

.line {
    width: 100%;
    height: 1px;

    /* border-radius: 5%; */
    background-color: #ddd;
}

/* Content hearder -- start */
.content-header {
    height: 50px;
    padding-bottom: 5px;
}

.content-header-title {
    padding-top: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #222;
}

.content-header-desc {
    width: 100%;
    font-size: 13px;
    color: #666666;
    margin-top: 10px;
    margin-bottom: 4px;
}
/* Content hearder -- end */


.container {
    width: 90%;
    margin: 3px auto;
    margin-top: 1%;
    padding: 0;

    display: flex;
}
/* Global style -- Can be replaced -- End */

/* Body content of user page -- Remain -- Start */

/* Body content of user page -- Remain -- End */

</style>
