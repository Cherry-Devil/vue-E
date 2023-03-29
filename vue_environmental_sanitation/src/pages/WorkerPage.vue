<template>
  <div class="workerMessage">
    <!-- <div id="header">
      <span id="sp"> <strong> | </strong></span>人员管理
    </div> -->

    <!-- 搜索框开始 -->
    <el-input
      style="display: inline-block; width: 500px; margin-top: 40px"
      placeholder="请输入内容"
      v-model="input"
      clearable
    >
    </el-input>
    <el-row style="display: inline-block; margin-left: 35px">
      <el-button type="primary">查询</el-button>
      <el-button>清空</el-button>
    </el-row>
    <!-- 搜索框结束 -->

    <!-- 添加开始 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-row>
      <el-button
        type="primary"
        @click="add"
        style="float: left; margin-left: 93px; margin-top: 35px"
        >+添加</el-button
      >

      <!-- style="float:right;margin-right:93px;margin-top:35px" -->
      <!-- <select name="paixu" id="paixu"
    style="float:right;margin-right:93px;margin-top:35px;height:28px;width:98px;color:#696969;font-size:16px">
     <option value="正序">序号正序</option>
     <option value="倒序">序号倒序</option>
   </select>
<span  style="float:right;margin-top:38px; margin-right:20px;font-size:18px">
    排序</span> -->
    </el-row>
    <!-- 添加结束 -->

    <!-- 表单开始 -->
    <el-table
      :data="tableData"
      style="
        width: 80%;
        margin-left: 93px;
        margin-top: 25px;
        margin-bottom: 30px;
      "
    >
      <el-table-column label="序号" width="160">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <!-- 姓名 -->
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="工号" width="160">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="工作类型" width="160">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="设备号" width="160">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="工作时间" width="160">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
          >

          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)"
            >修改</el-button
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
    <!-- 表单结束 -->

    <!-- 分页开始 -->
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
    <!-- 分页结束 -->
  </div>
</template>

<script>
export default {
  name: "WorkerPage",
};
</script>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],

      dialogFormVisible: false, // 控制添加人员信息弹窗变量
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    // 获取人员信息
    this.getPeople();
  },
  methods: {
    // 添加人员
    add() {
      this.dialogFormVisible = true;
      this.$http.post("/worker", {
        name: "环卫一号员工",
        type: "环卫工人",
        timeRange: {
          start: 5,
          end: 17,
        },
        device: 1,
      }).then(res=>{
        console.log(res);
      }).catch(err=>{console.log(err);})
    },
    // 获取人员信息
    getPeople() {
      this.$http
        .get("/worker")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.workers;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style >
#header {
  height: 30px;
  background-color: #ccc;
}
#sp {
  color: #4b86fd;
}
</style>