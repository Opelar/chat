<template>
    <div class="mainPanel">
        <div class="left">
            <div class="avatar">
                <img src="http://blog.geeek.info/static/favicon.jpg" alt="avatar" class="avatar avatar-circle">
                <div class="name">
                    admin
                </div>
            </div>

            <ul class="tab">
                <li class="tab-item">
                    <a href="#recent">
                        <div class="glyphicon glyphicon-comment"></div>
                        <br>
                        <span>消  息</span>
                    </a>
                </li>
                <li class="tab-item">
                    <a href="#concat">
                        <div class="glyphicon glyphicon-user"></div>
                        <br>
                        <span>联系人</span>
                    </a>
                </li>
                <li class="tab-item">
                    <a href="#setting">
                        <div class="glyphicon glyphicon-cog"></div>
                        <br>
                        <span>设  置</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="right">

        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
    import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
    import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
    import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
    import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';
    import 'bootstrap/dist/css/bootstrap.min.css';

    export default {
        name: 'mainPanel',
        data() {
            return {}
        }
    }
</script>

<style lang="less">
    .mainPanel {
        background-color: #fff;
        color: blue;
        min-height: 680px;
        margin: 10px 100px;

        .left {
            width: 70px;
            min-height: 680px;
            background-color: #000;
            .avatar {
                margin: 10px auto;

                .name {
                    color: #fff;
                }
            }

            .tab {
                list-style-type: none;
                padding: 0 0;

                .tab-item {
                    text-align: center;
                    margin-top: 100px;

                    div {
                        font-size: 20px;
                    }
                    span {
                        font-size: 12px;
                    }
                }
            }
        }

        .right {

        }
    }
</style>
