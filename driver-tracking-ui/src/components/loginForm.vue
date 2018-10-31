<template>
    <div class="content overflow-hidden" @submit.prevent="doLogin()">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <!-- Login Block -->
                <div class="block block-themed animated fadeIn">
                    <div class="block-header bg-primary">
                        <ul class="block-options">
                            <li>
                                <a href="base_pages_reminder.html">Quên mật khẩu</a>
                            </li>
                            <li>
                                <a href="base_pages_register.html" data-toggle="tooltip" data-placement="left" title=""
                                   data-original-title="Đăng Ký"><i class="si si-plus"></i></a>
                            </li>
                        </ul>
                        <h3 class="block-title">Đăng nhập</h3>
                    </div>
                    <div class="block-content block-content-full block-content-narrow">
                        <!-- Login Title -->
                        <h1 class="h2 font-w600 push-30-t push-5">Driver Tracking</h1>
                        <p>Vui lòng đăng nhập.</p>
                        <!-- END Login Title -->

                        <!-- Login Form -->
                        <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
                        <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                        <form class="js-validation-login form-horizontal push-30-t push-50" >
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary">
                                        <input v-model="credential.username" class="form-control" type="text" id="login-username">
                                        <label for="login-username">Username/Email</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="credential.password" class="form-control" type="password"
                                               id="login-password">
                                        <label for="login-password">Password</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label class="css-input switch switch-sm switch-primary">
                                        <input type="checkbox" id="login-remember-me"
                                               name="login-remember-me"><span></span> Remember Me?
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-primary push-10-r"  type="submit">Đăng nhập</button>
                                </div>
                            </div>
                        </form>
                        <!-- END Login Form -->
                    </div>
                </div>
                <!-- END Login Block -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginForm",
        data() {
            return {
                credential: {
                    username: '',
                    password: ''
                },
                hidePassword: true
            }
        },
        computed: {
            passwordType() {
                return this.hidePassword ? 'password' : 'text'
            },
            passwordIcon() {
                return this.hidePassword ? 'fa-eye' : 'fa-eye-slash'
            }
        },
        methods: {
            doLogin() {
                var that = this;
                this.$store.dispatch('login', this.credential);
            }
        }
    }
</script>

<style scoped>

</style>