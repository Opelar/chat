<template>
    <div class="navbar">
        <div class="logo">
            <img src="../images/logo.svg" alt="logo" />
            <span>Chat</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {}
        }
    }
</script>

<style lang="less">
    .navbar {
        width: 100%;
        margin-bottom: 10px;

        .logo {
            padding-left: 40px;
            img {
                width: 40px;
                height: 40px;
                float: left;
            }

            span {
                color: #fff;
                font-size: 24px;
                line-height: 40px
            }
        }
    }
</style>
