<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#696969"
            text-color="#ffffff"
            active-text-color="#333333"
            router
        >
            <template v-for="item in items">
                <template>
                    <el-menu-item :index="item.index" :key="item.index" @click="to(item.index)">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.icon"></use>
                        </svg>
                        {{item.title}}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../assets/js/bus'
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: "#icon-ziyuan1ditu",
                    index: "map",
                    title: "实时地图"
                },
                {
                    icon: "#icon-cheliang",
                    index: "vehicle",
                    title: "车辆管理"
                },
                {
                    icon: "#icon-renyuan5",
                    index: "worker",
                    title: "人员管理"
                },
                {
                    icon: "#icon-ziyuan1ditu",
                    index: "device",
                    title: "设备管理"
                },
                {
                    icon: "#icon-shouye",
                    index: "assessment",
                    title: "考核标准"
                },
                {
                    icon: "#icon-shouye",
                    index: "quantification",
                    title: "量化考核"
                }
            ]
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/','');
        }
    },
    created() {
        //通过bus组件进行组件之间的通信，切换菜单栏
        bus.$on('collapse',msg => {
            this.collapse = msg
        })
    },
    methods:{
        to(index) {
            console.log(index);
            // this.$http.get('/home/multidata',{  
            // }).then(res=>{
            //     console.log(res)
            //     }).catch(err=>{
            //         console.log(err);
            //     })
            // if(index === 'Map'){
            //     this.$router.push('/map')
            // }
        }
    }
}
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0px;
    top: 70px;
    bottom: 0px;
    background-color: #334256;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0px;
}
.sidebar-el-menu:not(.el-menu--collapse){
    width: 150px;
}
.sidebar >ul {
    height: 100%;
}
</style>