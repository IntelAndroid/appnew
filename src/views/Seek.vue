<template>
    <div class="seek">
        <nav-header v-bind:title="title"></nav-header>
        seek
        <!--footer tab-->
        <tab-footer></tab-footer>
    </div>
</template>
<script>
    import TabFooter from '@/components/TabFooter.vue'
    import NavHeader from '@/components/NavHeader.vue'
    export default {
        name: 'Seek',
        data(){
            return{
title:"咨询"
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