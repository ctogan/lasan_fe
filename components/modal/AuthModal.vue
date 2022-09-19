<template>
    <div class="modal auth-modal hide">
        <div class="modal-content">
            <a href="javascript:void(0)"><span class="close"></span></a>
            <div class="logo">
                <img src="/images/logo.svg" alt="">
            </div>
            <div class="auth-method">
                <h2 class="title">Gabung Kami Yuk!</h2>
                <div class="option">
                    <a class="btn-auth" href=""><img src="/images/google.svg" alt="" width="24"> Sign Up With
                        Google</a>
                    <a class="btn-auth" href=""><img src="/images/facebook.svg" alt="" width="24">Sign Up With
                        Facebook</a>
                    <a class="btn-auth" href=""><img src="/images/email.svg" alt="" width="24">Sign Up With
                        Email</a>
                </div>
                <div class="link-to-register">
                    Already have an account? <a href="">Sign in</a>
                </div>
                <div class="tnc-accepted">
                    Click “Sign Up” to agree to Lagi Santai’s <a href="">Terms of Service</a> and acknowledge
                    that
                    Lagi Santai’s
                    <a href="">Privacy Policy</a> applies to you.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'NuxtAuthModal'
    }
</script>