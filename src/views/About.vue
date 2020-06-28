<template>
  <div class="about">
    <nav-header v-bind:title="title"></nav-header>
    about
    <!--footer tab-->
    <tab-footer ></tab-footer>
  </div>
</template>
<script>
  import TabFooter from '@/components/TabFooter.vue'
  import NavHeader from '@/components/NavHeader.vue'
  export default {
    name: 'About',
    data(){
      return{
        title:"关于"
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