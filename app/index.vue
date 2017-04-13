<template>
    <div>
        <header></header>
        <main></main>
        <footer></footer>
    </div>
</template>

<script>
    import header from './component/header.component.vue';
    import main from './component/main.component.vue';
    import footer from './component/footer.component.vue';
    
    export default {
        name: 'index',
        data() {
            return {};
        },
        components: {
            header,
            main,
            footer
        }
    }
</script>
