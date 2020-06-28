<template>
    <div class="home">
        <nav-header v-bind:title="title"></nav-header>
        <!--搜索-->
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
            ></van-search>
        </form>
        <!--轮播-->
        <van-swipe :autoplay="3600" class="my-swipe">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image"/>
            </van-swipe-item>
        </van-swipe>
        <!--公告-->
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item>内容 1</van-swipe-item>
                <van-swipe-item>内容 2</van-swipe-item>
                <van-swipe-item>内容 3</van-swipe-item>
            </van-swipe>
        </van-notice-bar>
        <!--按键-->
        <van-grid :column-num="4" :border="false">
            <van-grid-item icon="/images/index_zozhi.png" text="种植" to="/tooth/Zy"/>
            <van-grid-item icon="/images/index_yjz.png" text="矫正"/>
            <van-grid-item icon="/images/index_xff.png" text="修复"/>
            <van-grid-item icon="/images/index_mbb.png" text="美白"/>
            <van-grid-item icon="/images/index_ert.png" text="儿童"/>
            <van-grid-item icon="/images/index_jybj.png" text="拔牙"/>
            <van-grid-item icon="/images/index_ggzl.png" text="补牙"/>
            <van-grid-item icon="/images/index_yzzl.png" text="治疗"/>
        </van-grid>
        <!--footer tab-->
        <tab-footer></tab-footer>
    </div>
</template>

<script>
    import TabFooter from '@/components/TabFooter.vue'
    import NavHeader from '@/components/NavHeader.vue'
    import Vue from 'vue';
    import {Lazyload} from 'vant';
    import {Toast} from 'vant';

    Vue.use(Lazyload);
    export default {
        name: 'Home',
        data() {
            return {
                value: "",
                images: [
                    'https://shop.0532wlkq.com/uploads/20200609174852c48a00500.jpg',
                    'https://shop.0532wlkq.com/uploads/20200609174852c48a00500.jpg',
                ],
                title: "首页"
            }
        },
        components: {
            TabFooter,
            NavHeader,
        },
        methods: {
            onSearch(val) {
                Toast(val);
            },
            setTitle(t) {
                this.titles = t;
            }
        }

    }
</script>
<style>

    .my-swipe .van-swipe-item img {width: 100%}
    .van-notice-bar {background-color: #fff !important;color: #666 !important;}
    .notice-swipe {height: 40px;line-height: 40px;}
</style>