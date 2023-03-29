<template>
  <div class="mapPage">
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'MapPage',
  data() {
    return {

    }
  },
  created() {
    this.introduce()
  },
  methods: {
    introduce() {
      // 引入地图组件 动态添加script标签
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=qfvXtdfpNRPWIpGhM0mED1ewIfGPNRd5&services=&t=20210408201030"';
      document.body.appendChild(script);
      script.onload = ()=>{
        this.init()
      }
      console.log(window.BMapGL);
    },
    init() {
    var map = new BMapGL.Map('container'); // 创建Map实例
    var point = new BMapGL.Point(117.35, 38.37); // 创建点坐标
    console.log(map);
    console.log(point);
    map.centerAndZoom(point, 20);
    map.enableScrollWheelZoom(); // 启用滚轮放大缩小
}
  }
}
</script>

<style scoped>
.mapPage{
  height: 100%;
  width: 100%;
}
#container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
  /* background-color: red; */
}
</style>