<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="app-search-bg">
          <el-button-group>
            <el-button type="primary" icon="share">刷新</el-button>
          </el-button-group>
          <el-input class="app-search" placeholder="请输入查询手机号" v-model="searchContent" icon="search" :on-icon-click="searchContentClick">
          </el-input>
        </div>
      </el-col>
      <el-col :span="24" style="margin-top: 20px;">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="department" label="部门">
          </el-table-column>
          <el-table-column prop="name" label="姓名">
          </el-table-column>
          <el-table-column prop="phone" label="手机号">
          </el-table-column>
          </el-table-column>
          <el-table-column label="账号状态">
            <template slot-scope="scope">
              <el-button v-if="scope.row.state == true" size="small">已启用</el-button>
              <el-button v-if="scope.row.state == false" size="small" type="danger">已停用</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button size="small" icon="edit" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="small" type="danger" icon="delete" @click="handleDelete(scope.row)">删除</el-button>
              <el-button v-if="scope.row.state == true" size="small" type="danger" icon="close" @click="eventStateUpdate(scope.row, scope.$index)">停用</el-button>
              <el-button v-if="scope.row.state == false" size="small" icon="check" @click="eventStateUpdate(scope.row, scope.$index)">启用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="app-pagination">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
      currentPage: 1,
      tableData: [{
        department: '销售一部',
        name: '龙傲天',
        phone: '18612243416',
        state: true
      }, {
        department: '销售二部',
        name: '凤骄地',
        phone: '18612243416',
        state: false
      }]
    }
  },
  mounted: function() {
    this.$nextTick(function() {

    })
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    searchContentClick(item) {

    },
    handleEdit(item) {

    },
    handleDelete(item) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    eventStateUpdate(item, index) {
      this.tableData[index].state = !this.tableData[index].state
    }
  }
}
</script>