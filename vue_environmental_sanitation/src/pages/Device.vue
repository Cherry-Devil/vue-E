<template>
  <div class="device">
    <el-button type="primary" class="addBtn" @click="addDevice">+添加</el-button>
    <div class="containter">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 80%; margin-left: 10%"
        border
      >
        <el-table-column label="序号" prop="date"> </el-table-column>
        <el-table-column label="设备名称" prop="date"> </el-table-column>
        <el-table-column label="设备编号" prop="date"> </el-table-column>
        <el-table-column label="设备分类" prop="name"> </el-table-column>
        <el-table-column align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleSee(scope)">查看</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页部分 -->
      <div class="fenye">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- 弹出框部分 -->
    <el-dialog title="添加设备" :visible.sync="dialogFormVisible" width="400px" center>
      <el-form :model="form">
        <el-form-item label="设备名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="设备编号" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="设备分类" :label-width="formLabelWidth">
          <el-input v-model="form.sort" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Device',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: '',
      dialogFormVisible: false, // 添加设备弹窗
      // 添加设备表单信息：
      form: {
          name: '',
          number:'',
          sort:''
        },
        formLabelWidth: '90px'
    }
  },
  created() {
    this.$http.get('/deviceData', { params: { device: 1 } }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    // 查看
    handleSee(scope) {
      console.log(scope);
    },
    // 编辑
    handleEdit() {

    },
    // 删除
    handleDelete() {

    },
    // 添加设备弹窗
    addDevice(){
     this.dialogFormVisible = true
    },
    // 确定添加
    sure(){
      this.dialogFormVisible = false
    },
    // 取消添加
    cancel(){
       this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>
.device {
  width: 100%;
  height: 100%;
}
.containter {
  /* background-color: red; */
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
}
.addBtn {
  margin-left: -65%;
  margin-top: 3%;
}
.fenye {
  margin-top: 20px;
}
</style>