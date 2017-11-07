<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="app-search-bg">
          <el-button-group>
            <el-button type="primary" icon="plus" @click="createFinanceEvent = true">添加金融活动</el-button>
            <el-button type="primary" icon="share">刷新</el-button>
          </el-button-group>
          <el-input class="app-search" placeholder="请输入查询内容" v-model="searchContent" icon="search" :on-icon-click="searchContentClick">
          </el-input>
        </div>
      </el-col>
      <el-col :span="24" style="margin-top: 20px;">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="start" label="开始日期">
          </el-table-column>
          <el-table-column prop="stop" label="截止日期">
          </el-table-column>
          <el-table-column prop="title" label="标题" width="280">
          </el-table-column>
          <el-table-column label="排序">
            <template slot-scope="scope">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  {{scope.row.sort}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item divided>随机</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
          <el-table-column label="显示状态">
            <template slot-scope="scope">
              <el-button v-if="scope.row.state == true" size="small" @click="eventStateUpdate(scope.row, scope.$index)">显示</el-button>
              <el-button v-if="scope.row.state == false" size="small" type="danger" @click="eventStateUpdate(scope.row, scope.$index)">隐藏</el-button>
            </template>
          </el-table-column>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="small"
                icon="edit"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                icon="delete"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="app-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="创建金融活动" :visible.sync="createFinanceEvent">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属门店">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动简介">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="显示状态">
          <el-switch on-text="显示" off-text="隐藏" on-color="#13ce66" off-color="#ff4949" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="datetimerange" placeholder="选择时间范围">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createFinanceEvent = false">取 消</el-button>
        <el-button type="primary" @click="createFinanceEvent = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      createFinanceEvent: false,
      searchContent: '',
      currentPage: 1,
      tableData: [{
        start: '2017-9-1 9:20:12',
        stop: '2017-9-8 10:00:00',
        title: '江苏天奥奥迪超值平安金融购车季',
        sort: 1,
        state: 1
      }, {
        start: '2017-9-1 9:20:12',
        stop: '2017-9-8 10:00:00',
        title: '江苏天奥奥迪超值平安金融购车季',
        sort: 2,
        state: 0
      }, {
        start: '2017-9-1 9:20:12',
        stop: '2017-9-8 10:00:00',
        title: '江苏天奥奥迪超值平安金融购车季',
        sort: 3,
        state: 1
      }, {
        start: '2017-9-1 9:20:12',
        stop: '2017-9-8 10:00:00',
        title: '江苏天奥奥迪超值平安金融购车季',
        sort: 4,
        state: 1
      }, {
        start: '2017-9-1 9:20:12',
        stop: '2017-9-8 10:00:00',
        title: '江苏天奥奥迪超值平安金融购车季',
        sort: 5,
        state: 1
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