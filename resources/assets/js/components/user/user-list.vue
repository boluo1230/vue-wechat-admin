<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="app-search-bg">
          <el-button-group>
            <el-button type="primary" icon="upload2" @click="exportExcel">导出列表</el-button>
            <el-button type="primary" icon="share">刷新</el-button>
          </el-button-group>
          <el-input class="app-search" placeholder="请输入查询手机号" v-model="searchContent" icon="search" :on-icon-click="searchContentClick">
          </el-input>
        </div>
      </el-col>
      <el-col :span="24" style="margin-top: 20px;">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="username" label="姓名">
          </el-table-column>
          <el-table-column prop="phone" label="手机号">
          </el-table-column>
          <el-table-column prop="gender" label="性别">
          </el-table-column>
          <el-table-column prop="age" label="年龄">
          </el-table-column>
          <el-table-column prop="status" label="状态">
          </el-table-column>
          <el-table-column prop="creare_date" label="创建时间">
          </el-table-column>
          <el-table-column label="进店记录">
            <template slot-scope="scope">
              <el-button size="small" @click="userListEntryRecord = true">查看</el-button>
              <!-- <el-button size="small" @click="userListUserInfo = true">客户信息</el-button> -->
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
    <el-dialog title="进店记录" :visible.sync="userListEntryRecord">
      <el-table :data="gridData">
        <el-table-column property="phone" label="手机号" width="150"></el-table-column>
        <el-table-column property="start" label="进店时间" width="200"></el-table-column>
        <el-table-column property="shop" label="离店时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
      userListEntryRecord: false,
      userListUserInfo: false,
      currentPage: 1,
      gridData: [{
        phone: '18612243416',
        start: '2017-9-1 9:20:12',
        shop: '2017-9-1 10:00:00'
      }],
      tableData: [{
        username: 'JsonZhang',
        gender: 'man',
        age: '22',
        phone: '18612243416',
        status: '活跃',
        creare_date: '2017-9-1 9:20:12'
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

    },
    eventStateUpdate(item) {

    },
    exportExcel() {
      let fileName = '用户列表'
      let sheetFilter = ['phone', 'start', 'stop', 'state']
      let sheetHeader = ['手机号', '进店时间', '离店时间', '状态']
      let excelContent = this.tableData
      this.jsonToExcel(fileName, sheetFilter, sheetHeader, excelContent)
    }
  }
}
</script>