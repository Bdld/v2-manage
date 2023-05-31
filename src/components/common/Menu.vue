<template>
    <div class="menu">
        <el-aside width="220px">
            <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#2578b5"
            text-color="#fff"
            active-text-color="#ffd04b">
            <div v-for="(item, index) in menus" :key="index" >
                <el-submenu :index="index + ''" v-if="!item.hidden">
                <template slot="title">
                <i :class="item.iconClass"></i>
                <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group v-for="(child, index) in item.children" :key="index">
                    <el-menu-item :index="child.path">
                        <i :class="child.iconClass"></i>
                        {{child.name}}
                    </el-menu-item>
                </el-menu-item-group>
                </el-submenu>
            </div>
            </el-menu>
        </el-aside>
    </div>
</template>
  
  <script>
  export default {
      data() {
          return {
              menus:[]
          }
      },
      created(){
        console.log(this.$router.options.routes)
        this.menus = [...this.$router.options.routes]
      }
  }
  </script>
  
  <style lang="less">
  .menu {
    .el-aside {
        height:100%;
        .el-menu {
            height:100%;
            .fa {
                margin-right: 10px;
            }
        }
        .el-submenu .el-submenu-item{
            min-width: 0;
        }
    }
  }
  </style>