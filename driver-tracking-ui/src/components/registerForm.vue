<template>
    <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <!-- Material Register -->
        <div class="block block-themed">
            <div class="block-header bg-success">
                <h3 class="block-title">Đăng ký</h3>
            </div>
            <div class="block-content"  @submit.prevent="register()">
                <form class="form-horizontal push-10-t push-10" >
                    <div class="form-group">
                        <div class="col-xs-6">
                            <div class="form-material">
                                <input class="form-control" type="text" id="register5-fullname" name="register5-fullname" placeholder="Enter your fullname..">
                                <label  v-model="newDriver.full_name" for="register5-fullname">Full name</label>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="form-material">
                                <input  v-model="newDriver.date_of_birth" class="js-datepicker form-control" type="text" id="register-date-of-birth" name="example-datepicker2" data-date-format="dd/mm/yy" placeholder="dd/mm/yy">
                                <label for="register-date-of-birth">Date of birth</label>
                            </div>
                        </div>

                        <div class="col-xs-6">
                            <div class="form-material">
                                <input  v-model="newDriver.citizen_id" class="form-control" type="text" id="register5-cmtnd" name="register5-cmtnd" placeholder="Nhap so Chung minh thu nhan dan...">
                                <label for="register5-cmtnd">CMTND</label>
                            </div>
                        </div>

                        <div class="col-xs-6">
                            <div class="form-material">
                                <input  v-model="newDriver.username" class="form-control" type="text" id="register5-username" name="register5-username" placeholder="ten dang nhap...">
                                <label for="register5-username">Username</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="form-material input-group">
                                <input v-model="newDriver.email" class="form-control" type="email" id="register5-email" name="register5-email" placeholder="Enter your email..">
                                <label for="register5-email">Email</label>
                                <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="form-material input-group">
                                <input class="form-control" type="password" id="register5-password" name="register5-password" placeholder="Enter your password..">
                                <label for="register5-password">Password</label>
                                <span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="form-material input-group">
                                <input class="form-control" type="password" id="register5-password2" name="register5-password2" placeholder="Confirm your password..">
                                <label for="register5-password2">Confirm Password</label>
                                <span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12">
                            <button class="btn btn-sm btn-success" type="submit"><i class="fa fa-plus push-5-r"></i> Đăng ký</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- END Material Register -->
    </div>
    </div>
</template>

<script>
    export default {
        name: "registerForm",
        data(){
            return {
                newDriver : {}
            }
        },
        methods : {
            register(){
                console.log(this.newDriver)
            }
        }
    }
</script>

<style scoped>

</style>