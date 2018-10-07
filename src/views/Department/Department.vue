<template>
  <div>
		<a-row>
			<a-col class="tree-left" :span="4">
				<a-row>
					<a-col :span="18">
						<a-input-search class="tree-search" placeholder="搜索成员" @change="onChange" />
					</a-col>
					<a-col :span="6" class="add-department">
						<a-dropdown>
							<a-menu slot="overlay" @click="handleMenuClick">
								<a-menu-item key="department"><a-icon type="folder" />添加部门</a-menu-item>
								<a-menu-item key="user"><a-icon type="user" />添加成员</a-menu-item>
							</a-menu>
							<a-button style="margin-left: 3px">
								<a-icon type="plus" />
							</a-button>
						</a-dropdown>
					</a-col>
				</a-row>
				<a-tree
					@expand="onExpand"
					@select="onSelect"
					@rightClick="onRightClick"
					showIcon
					:expandedKeys="expandedKeys"
					:autoExpandParent="autoExpandParent"
					:treeData="treeData"
				>
					<a-icon slot="folder" type="folder" />
				</a-tree>
			</a-col>
			<a-col class="tree-right" :span="20">
				<a-table :columns="columns" :dataSource="dataTable">
					<a slot="action" slot-scope="text">编辑</a>
				</a-table>
			</a-col>
		</a-row>
		<div>
			<a-modal
				v-model="visible"
			>
				<template slot="footer">
					<a-button @click="handleCancel">取消</a-button>
					<a-button @click="updateDepartment" type="primary" ghost>编辑</a-button>
					<a-button @click="deleteDepartment" type="danger" ghost>删除</a-button>
				</template>
				<p>{{ departmentInfo.title }}</p>
			</a-modal>
		</div>
  </div>
</template>
<script>
import { getUserList } from "@/api/user";
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '手机', dataIndex: 'mobile', key: 'mobile' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
	{ title: '职务', dataIndex: 'position', key: 'position' },
	{ title: '性别', dataIndex: 'gender', key: 'gender'},
  {
    title: 'Action',
    key: 'operation',
    width: 100,
    scopedSlots: { customRender: 'action' },
  }
]
export default {
  data () {
    return {
			data: [],
			dataTable: [],
			expandedKeys: [],
			visible: false,
      searchValue: '',
			autoExpandParent: true,
			columns,
			departmentKey: null,
			departmentInfo: {},
			departmentList: [{
				title: '北京古点科技有限公司',
				key: '1'
			}, {
				title: '技术部',
				key: '2'
			}, {
				title: '前端',
				key: '3'
			}, {
				title: '后端',
				key: '4'
			}, {
				title: '测试',
				key: '5'
			}, {
				title: '运维',
				key: '6'
			}],
      treeData: [{
				title: '北京古点科技有限公司',
				key: '1',
				slots: {
					icon: 'folder'
				},
				children: [{
					title: '技术部',
					key: '2',
					slots: {
						icon: 'folder'
					},
					children: [{
						title: '前端',
						key: '3',
						slots: {
							icon: 'folder'
						}
					}, {
						title: '后端',
						key: '4',
						slots: {
							icon: 'folder'
						}
					}, {
						title: '测试',
						key: '5',
						slots: {
							icon: 'folder'
						}
					}, {
						title: '运维',
						key: '6',
						slots: {
							icon: 'folder'
						}
					}]
				}]
			}]
    }
	},
	created() {
		this.getDataTableList()
	},
  methods: {
    onExpand (expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
		},
		onSelect (expandedKeys) {
			if (expandedKeys == 1) {
				this.dataTable = this.data
			} else {
				this.departmentKey = expandedKeys.length ? expandedKeys : this.departmentKey
				this.dataTable = this.data.filter(item => item.department == this.departmentKey)
			}
		},
    onChange (e) {
			const value = e.target.value
      const expandedKeys = this.departmentList.map((item) => {
        if (item.title.indexOf(value) > -1) {
          return this.getParentKey(item.title, this.treeData)
        }
        return null
			}).filter((item, i, self) => item && self.indexOf(item) === i)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      })
		},
		onRightClick (item) {
			this.departmentInfo = this.departmentList.filter(_item => _item.key == item.node.eventKey)[0]
			this.visible = true
		},
		updateDepartment () {
			console.log('修改部门名称')
		},
		deleteDepartment () {
			console.log('删除部门 谨慎操作')
		},
		handleCancel () {
			this.visible = false
		},
		getParentKey (title, tree) {
			let parentKey
			for (let i = 0; i < tree.length; i++) {
				const node = tree[i]
				if (node.children) {
					if (node.children.some(item => item.title === title)) {
						parentKey = node.title
					} else if (this.getParentKey(title, node.children)) {
						parentKey = this.getParentKey(title, node.children)
					}
				}
			}
			return parentKey
		},
		getDataTableList () {
			getUserList().then(res => {
				this.data = res.data
				this.dataTable = res.data
			})
		},
		handleMenuClick(e) {
      console.log('click', e);
    }
  }
}
</script>

<style scoped>
.tree-search {
	margin-bottom: 8px;
}

.tree-left {
	padding: 18px;
}

.tree-right {
	padding: 18px;
	height: 88vh;
	border-left: 1px solid #EEE;
}

.add-department {
	text-align: right;
	line-height: 32px;
}
</style>
