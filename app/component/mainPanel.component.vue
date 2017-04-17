<template>
    <div class="mainPanel">
        <div class="left">
            <div class="avatar">
                <img src="http://blog.geeek.info/static/favicon.jpg" alt="avatar" class="avatar avatar-default">
                <div class="name">
                    admin
                </div>
            </div>

            <ul class="tab">
                <li class="tab-item">
                    <a href="#recent">
                        <span class="glyphicon glyphicon-comment"></span>
                    </a>
                </li>
                <li class="tab-item">
                    <a href="#concat">
                        <span class="glyphicon glyphicon-user"></span>
                    </a>
                </li>
                <li class="tab-item">
                    <a href="#setting">
                        <span class="glyphicon glyphicon-cog"></span>
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
                    margin-top: 150px;
                }
            }
        }

        .right {

        }
    }
</style>
