<template>
    <div class="studentList">
      <!-- 查询区域 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
      </el-form>
      <!-- 表单区域 -->
      <el-table :data="compData" border style="width: 100%">
        <el-table-column prop="name" label="姓名"  align="center"></el-table-column>
        <el-table-column prop="age" label="	年龄"  align="center"></el-table-column>
        <el-table-column prop="sex_text" label="性别"  align="center"></el-table-column>
        <el-table-column prop="number" label="学号"  align="center"></el-table-column>
        <el-table-column prop="state_text" label="状态"  align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center" width="300px"></el-table-column>
        <el-table-column prop="phone" label="手机号码"  align="center"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</template>
  
  <script>
  import { student,studentDel } from '../../api/api';

  export default {
    data() {
      return {
        tableData: [],
        currentPage: 1, //当前页数
        pageSize:10, //每页条数
        total: 0, //总条数
        formInline: {
          name:''
        }
      }
    },
    computed:{
      compData(){
        return this.tableData.slice((this.currentPage - 1) * this.pageSize,this.currentPage * this.pageSize)
      }
    },
    created() {
      this.getData()
      
    },
    methods: {
      getData(params){
        student(params).then((res) => {
          if(res.data.status === 200) {
            this.tableData = res.data.data
            this.total = res.data.total
            this.tableData.forEach(item => {
              //尽量不要动原数据
              item.sex === 1 ? item.sex_text = '男' : item.sex_text = '女'
              item.state === "1" ? item.state_text = '已入学' : item.state_text === "2" ? item.state_text = '未入学' : item.state_text = '休学中'
            })
          }

          })
        },
        handleSizeChange(val) {
          this.currentPage = 1
          this.pageSize = val
        },
        handleCurrentChange(val) {
          this.currentPage = val
        },
        del(row){
          studentDel(row.id).then(res => {
            if(res.data.status === 200) {
              this.$message({ message: "删除数据成功",type:'success'})
              this.getData()
            }
          })
        },
        find(){
          console.log(this.formInline.name);
          this.getData(this.formInline.name)
        },
        reset(){
          this.formInline = {}
          this.getData(this.formInline)
        },
      },

  }
  </script>
  
  <style lang="less" scoped>
  .studentList{
    .demo-form-inline, .el-form-item{
      text-align: left;
      margin-top: 10px;
    }
    .el-pagination{
      text-align: left;
      margin-top: 20px;
}
  }

  </style> 