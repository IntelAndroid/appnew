<template>
    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" replace to="/" >首页</van-tabbar-item>
        <van-tabbar-item icon="completed" replace to="/News" >新闻</van-tabbar-item>
        <van-tabbar-item icon="envelop-o" replace to="/Seek" >咨询</van-tabbar-item>
        <van-tabbar-item icon="contact" replace to="/About">关于</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: 'TabFooter',
        props: {},
        data() {
            return {
                active: 0,
            }
        },
        methods:{
            btnClick(t){
                this.$emit('titles',t);
            }
        }

    }
</script>
