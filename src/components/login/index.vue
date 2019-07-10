<template>
  <div id="login">
    <div class="loginWrap">
      <div class="header">

      </div>
      <div class="body">
        <div class="body-input">
          <i class="el-icon-user-solid"></i>
          <input placeholder="请输入用户名" v-model="username" type="text"/>
        </div>
        <div class="body-input">
          <i class="el-icon-s-goods"></i>
          <input placeholder="请输入密码" v-model="password" type="password"/>
        </div>
        <div class="remember">
          <el-checkbox v-model="checked">记住我</el-checkbox>
          <span v-show="tipShow" style="color: #f54778">用户名或密码不能为空，请重新输入</span>
        </div>
        <el-button native-type="submit" @click="submit" type="primary" round size="medium" class="login-button">登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        tipShow: false,
        checked: false,
        username: '',
        password: '',
      };
    },
    methods: {
      async submit() {
        if (!this.username || !this.password) {
          this.tipShow = true;
          return;
        }
             await   this.$http.post('/loginController/login',{
                  userName:this.username,
                  passWord:this.password,
                  rememberMe:this.rememberMe
                }).then(res=>{
                       if(res.data.status===0){
                           this.$message(res.data.message);
                           this.$router.push("/index");
                       }
                })
      },
    },
  };
</script>

<style lang="scss">
  #login {
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url("../../assets/images/login/loginBg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .loginWrap {
      height: 530px;
      width: 540px;
      position: absolute;
      top: 50%;
      left: 75%;
      background: #ffffff;
      text-align: center;
      transform: translate(-50%, -50%);
      border-radius: 5px;

      .header {
        height: 220px;
        border-radius: 5px 5px 0 0;
        background: #373a46;
        position: relative;
        overflow: hidden;

        .bg {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
        }

        .logo {
          display: block;
          margin: 65px auto 0;
        }
      }

      .body {
        margin-top: 20px;
        padding: 0 80px;

        .body-input {
          height: 70px;
          border-bottom: 1px solid #e1e2e3;
          display: flex;
          align-items: center;

          i {
            margin-right: 20px
          }

          input {
            border: none;
            color: #303239;
            font-size: 15px;
            height: 100%;
            width: 250px;
          }
        }

        .remember {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .tip {
            color: #f54778;
            font-size: 14px;
          }
        }

        button {
          margin: 30px auto 0;
          display: block;
          width: 240px;
          height: 50px;
          border-radius: 25px;
          font-size: 18px;
          color: #fff;
          background: #429cf8;
          box-shadow: 0 0 5px #429cf8;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
</style>
