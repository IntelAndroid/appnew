<template>
    <div class="news">
        <nav-header v-bind:title="title"></nav-header>
        news
        <!--footer tab-->
        <tab-footer ></tab-footer>
    </div>
</template>
<script>
    import TabFooter from '@/components/TabFooter.vue'
    import NavHeader from '@/components/NavHeader.vue'
    export default {
        name: 'News',
        data(){
            return{
                title:"新闻"
            }
        },
        components: {
            TabFooter,
            NavHeader,
        },
        methods:{

        }
    }
</script>