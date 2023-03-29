<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" size="mini" @click="centerDialogVisible = true">添加车辆</el-button>
        <el-button type="primary" size="mini" @click="delAll">批量删除</el-button>
        <el-input v-model="select_word" size="mini" class="handle-input"></el-input>
        <el-button type="primary" size="mini">查询车辆</el-button>
      </div>
    </div>
    <el-table size="mini" border style="width: 100; height: 540px;" :data="data" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column label="车牌号" width="150" align="center"></el-table-column>
      <el-table-column label="车辆类型" width="150" align="center"></el-table-column>
      <el-table-column label="驾驶员" width="150" align="center"></el-table-column>
      <el-table-column label="工时区间" width="150" align="center"></el-table-column>
      <el-table-column label="规则" align="center"></el-table-column>
      <el-table-column label="设备号" width="150" align="center"></el-table-column>
      <el-table-column label="操作" width="210" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button> 
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout = "total,prev,pager,next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="tableData.length"
        @current-change="handleCurrentChange"
        >
      </el-pagination>
    </div>
    <el-dialog title="添加车辆" :visible.sync="centerDialogVisible" width="400px" center>
      <el-form :model="registerForm" ref="registerForm" label-width="80px">
        <el-form-item prop="numbers" label="车牌号" size="mini">
          <el-input v-model="registerForm.numbers" placeholder="车牌号"></el-input>
        </el-form-item>
        <el-form-item prop="type" label="车辆类型" size="mini">
          <el-input v-model="registerForm.type" placeholder="车辆类型"></el-input>
        </el-form-item>
        <el-form-item prop="driverId" label="驾驶员" size="mini">
          <el-input v-model="registerForm.driverId" placeholder="驾驶员"></el-input>
        </el-form-item>
        <el-form-item prop="timeRange" label="工时区间" size="mini">
          <el-input v-model="registerForm.timeRange" placeholder="工时区间"></el-input>
        </el-form-item>
        <el-form-item prop="openTimeRule" label="规则" size="mini">
          <el-input v-model="registerForm.openTimeRule" placeholder="规则"></el-input>
        </el-form-item>
        <el-form-item prop="device" label="设备号" size="mini">
          <el-input v-model="registerForm.device" placeholder="设备号"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="mini" @click="centerDialogVisible = false">取消</el-button>
        <el-button size="mini" @click="addVehicle">确定</el-button>                
      </span>
     </el-dialog>
  </div>
</template>

<script>
import {setVehicle,getAllVehicle,delVehicle} from '../api/index'
import {mixin} from '../mixins/index'
export default {
  mixins: [mixin],
  data() {
    return {
      centerDialogVisible: false, //添加弹窗是否显示
      editVisible: false,         //编辑弹窗是否显示
      delVisible: false,          //删除弹窗是否显示
      registerForm:{      //添加框
        numbers: '',      //车牌号
        type: '',         //车辆类型
        driverId: '',     //驾驶员
        timeRange: '',    //工时区间
        openTimeRule: '', //规则
        device: ''        //设备号
      },
      from: {
        id: '',           //id
        numbers: '',      //车牌号
        type: '',         //车辆类型
        driverId: '',     //驾驶员
        timeRange: '',    //工时区间
        openTimeRule: '', //规则
        device: ''
      },
      tableData: [],
      tempData: [],
      select_word: '',
      pageSize: 10,
      currentPage: 1,
      idx: -1,
      multipleSelection: []
    }
  },

  computed:{
    data(){
      return this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
    }
  },

  watch: {
    select_word: function () {
      if(this.select_word == '') {
        this.tableData = this.tempData;
      }else {
        this.tableData = [];
        for(let item of this.tempData) {
          if(item.name.include(this.select_word)) {
            this.tableData.push(item);
          }
        }
      }
    }
  },

  created(){
    this.getData();
  },

  methods: {
    handleCurrentChange(val){
      this.currentPage = val;
    },
    getData(){
      this.tempData = [];
      this.tableData = [];
      getAllVehicle().then(res => {
        this.tempData = res;
        this.tableData = res;
        this.currentPage = 1;
      })
    },
    addVehicle(){
      let params = new URLSearchParams();
      params.append('numbers',this.registerForm.numbers);
      params.append('type',this.registerForm.type);
      params.append('driverId',this.registerForm.driverId);
      params.append('timeRange',this.registerForm.timeRange);
      params.append('openTimeRule',this.registerForm.openTimeRule);
      params.append('device',this.registerForm.device);

      setVehicle(params)
      .then(res => {
        if(res.code == 1){
          this.getData();
          this.notify("添加成功","success");
        }else{
          this.notify("添加失败","error");
        }
      })
      .catch(err => {
        console.log(err);
      });
      this.centerDialogVisible = false;
    },
    handleSelectionChange(val){
      this.multipleSelection = val;
    },
    handleEdit(row){
      this.editVisible = true;
      this.form = {
        id: row.id,
        numbers: row.numbers,
        type: row.type,
        driverId: row.driverId,
        timeRange: row.timeRange,
        openTimeRule: row.openTimeRule,
        device: row.device
      }
    },
    handleDelete(id){
      this.idx = id;
      this.delVisible = true;
    },
    deleteRow(){
      delVehicle(this.idx)
      .then(res => {
        if(res){
          this.getData();
          this.notify("删除成功","success");
        }else{
          this.notify("删除失败","error");
        }
      })
      .catch(err => {
        console.log(err);
      });
      this.delVisible = false;
    },
  }
}
</script>

<style scoped>
.handle-input {
  width: 300px;
  display: inline-block;
}
.pagination{
  display: flex;
  justify-content: center;
}
</style>