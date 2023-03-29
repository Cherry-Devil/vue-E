<template>
  <div class="sixBtn">
    <div class="head"></div>
    <div class="context">
      <div v-for="(item, index) in title" :key="index" class="outSecpt" @click="sortClick(index)">
        <img :src="item.img" alt="" class="imgs">
        <div class="titleSize"><p>{{item.call}}</p></div>
        <!-- <div class="textSize"><span >{{item.text}}</span></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SixBtn',
  data() {
    return {
      title: [
        {
          call: '实时地图',
          img: require('../assets/img/btn/map.png'),
          // text: '实时显示一个地图，地图上标识出车辆、人员和设备的实时位置。'
        },
        {
          call: '车辆管理',
          img: require('../assets/img/btn/car.png'),
          // text: '罗列出所有的车辆信息，根据不同的车型进行筛选显示。增加、删除车辆信息'
        },
        {
          call: '人员管理',
          img: require('../assets/img/btn/people.png'),
          // text: '罗列出所有的人员信息，根据不同的工作类型进行筛选显示。增加、删除人员信息'
        },
        {
          call: '设备管理',
          img: require('../assets/img/btn/device.png'),
          // text: '罗列出所有的设备信息，根据不同的设备类型进行筛选显示。增加、删除设备信息'
        },
        {
          call: '考核标准',
          img: require('../assets/img/btn/kaohe.png'),
          // text: '规定车辆、人员的违规，违纪信息的准则'
        },
        {
          call: '量化考核',
          img: require('../assets/img/btn/lianghua.png'),
          // text: '来显示什么时间段内不同类型的违规次数'
        }
      ]

    }
  },
  methods:{
    sortClick(index){
    switch(index){
     case 0:
       this.$router.push('/map')
       break;
     case 1:
       this.$router.push('/vehicle')
     break;
     case 2:
       this.$router.push('/worker')
     break;
     case 3:
       this.$router.push('/device')
     break;
     case 4:
       this.$router.push('/assessment')
     break;
     case 5:
      this.$router.push('/quantification')
       break;
   }
    }
  }
}
</script>

<style scoped>

.head {
  height: 50px;
  /*background-image: linear-gradient(to right, #30b9cc, #76c4bc);*/
  background-image: linear-gradient(to right, #1D4264,#000D37);
}
.context{
  width: 1200px;
  /* background-color: aqua; */
  margin: 0 auto;
  margin-top: 100px;
}
.outSecpt{
  width: 150px;
  height: 180px;
  float: left;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 30px;
  border-radius: 10px;
  /* padding: 10px 10px; */
  /* margin: 10px 10px; */
  /* background-color: #9999; */
  box-shadow: 5px 5px 5px 5px #9999;
}
.imgs{
  margin-top: 15px;
  width: 80px;
  height: 80px;
}
.titleSize{
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 25px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif; 
}
</style>