<template>
  <div>
      <!-- 表单区域 -->
      <el-table :data="tableData" border style="width: 100%">
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[]
    }
  },
}
</script>

<style>

</style>