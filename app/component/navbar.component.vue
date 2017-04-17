<template>
    <div class="navbar">
        <ul>
            <li>item - a</li>
            <li>item - b</li>
            <li>item - c</li>
            <li>item - d</li>
        </ul>
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
        background-color: pink;
        color: green;

        ul {
            height: 40px;
            line-height: 40px;
            list-style-type: none;

            li {
                float: left;
                margin: 0 10px;
            }
        }
    }
</style>
