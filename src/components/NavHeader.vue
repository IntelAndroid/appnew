<template>
    <van-nav-bar>
        <template #title>
            {{title}}
        </template>
    </van-nav-bar>
</template>

<script>
    export default {
        name: "NavHeader",
        props: {
            title: String,
        },
        methods: {},
    }
</script>

<style scoped>

</style>