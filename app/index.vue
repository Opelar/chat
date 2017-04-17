<template>
    <div>
        <navbar></navbar>
        <mainPanel></mainPanel>
        <foot></foot>
    </div>
</template>

<script>
    import navbar from './component/navbar.component.vue';
    import mainPanel from './component/mainPanel.component.vue';
    import foot from './component/foot.component.vue';

    export default {
        name: 'index',
        data() {
            return {};
        },
        components: {
            navbar,
            mainPanel,
            foot
        }
    }
</script>
