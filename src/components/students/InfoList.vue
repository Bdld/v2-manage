<template>
  <div class="infoList">
    <!-- 新增学生区域，点击addStudent之后显示弹窗 -->
      <el-form :inline="true" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单区域 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名"  align="center"></el-table-column>
        <el-table-column prop="sex_text" label="性别"  align="center"></el-table-column>
        <el-table-column prop="age" label="	年龄"  align="center"></el-table-column>
        <el-table-column prop="father" label="父亲"  align="center"></el-table-column>
        <el-table-column prop="mother" label="母亲"  align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center" width="300px"></el-table-column>0
        <el-table-column prop="time" label="入校时间"  align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号码"  align="center"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </template>
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>

        <!-- 新增学生的弹窗，默认隐藏 -->
        <el-dialog title="添加学生信息" :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form"  ref="form" :rules="rules">
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="父亲" :label-width="formLabelWidth" prop="father">
            <el-input v-model="form.father" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="母亲" :label-width="formLabelWidth" prop="mother">
            <el-input v-model="form.mother" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
            <el-date-picker
              v-model="form.time"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
>
            </el-date-picker>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      dialogFormVisible:false,
      form:{
        name:"",
        sex:"1",
        age:"",
        father:"",
        mother:"",
        address:"",
        time:"",
        phone:"",
      },
      formLabelWidth:"80px",
      rules:{},

    }
  },
  methods: {
    edit(){

    },
    del(){

    },
    addStudent(){
      this.dialogFormVisible = true
    },
    sure(form){
    console.log(form,this.form);
  }
  },
}
</script>


<style lang="less">
.infoList{
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