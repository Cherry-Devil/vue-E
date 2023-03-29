<template>
    <div class="header">
        <div class="collapse-btn">
           <i class="el-icon-menu"></i>
        </div>
        <div class="logo">智慧城市管理后台</div>
        <div class="header-right">
            <div class="right refresh">
                <i class="el-icon-refresh"></i>
                <!-- <span style="font-size: 12px;">刷新</span> -->
            </div>
            
           <div class="right help">
               <i class="el-icon-question"></i>
                <!-- <span style="font-size: 12px;">帮助</span> -->
           </div>
        </div>
    </div>
</template>


<script>
// import bus from '../assets/js/bus'
export default {
    name: 'the-header',
    data() {
        return {
            collapse: false,
        }
    },
    methods: {
        // collapseChange() {
        //     this.collapse = !this.collapse;
        //     bus.$emit('collapse',this.collapse);
        // },
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 70px;
    background-color: #4b86fd;
    font-size: 20px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    line-height: 70px;
    font-weight: bold;
}
.header-right {
    float: right;
    padding-right: 50px;
    display: flex;
    height: 70px;
    align-items: center;
}
/* .refresh {
    width: 70px;
    height: 20px;
    border: 0.5px solid #000;
    border-radius: 4px;
} */
.right {
    padding-right: 10px;
}
</style>