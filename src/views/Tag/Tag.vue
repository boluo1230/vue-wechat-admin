<template>
  <div>
		<a-row>
			<a-col class="tree-left" :span="4">
				<a-row>
					<a-col :span="18">
						<a-input-search class="tree-search" placeholder="搜索标签" @change="onChange" />
					</a-col>
					<a-col :span="6" class="add-tag">
						<a-dropdown>
							<a-menu slot="overlay" @click="handleMenuClick">
								<a-menu-item key="tag"><a-icon type="tag" />添加标签</a-menu-item>
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
					<a-icon slot="tag" type="tag" />
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
					<a-button @click="updatetag" type="primary" ghost>编辑</a-button>
					<a-button @click="deletetag" type="danger" ghost>删除</a-button>
				</template>
				<p>{{ tagInfo.title }}</p>
			</a-modal>
		</div>
  </div>
</template>
<script>
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
			tagKey: null,
			tagInfo: {},
			tagList: [{
				title: '技术',
				key: '1'
			}, {
				title: '产品',
				key: '2'
			}, {
				title: '设计',
				key: '3'
			}],
      treeData: [{
				title: '技术',
				key: '1',
				slots: {
					icon: 'tag'
				}
			}, {
				title: '产品',
				key: '2',
				slots: {
					icon: 'tag'
				}
			}, {
				title: '设计',
				key: '3',
				slots: {
					icon: 'tag'
				}
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
				this.tagKey = expandedKeys.length ? expandedKeys : this.tagKey
				this.dataTable = this.data.filter(item => item.tag == this.tagKey)
			}
		},
    onChange (e) {
			const value = e.target.value
      const expandedKeys = this.tagList.map((item) => {
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
			this.tagInfo = this.tagList.filter(_item => _item.key == item.node.eventKey)[0]
			this.visible = true
		},
		updatetag () {
			console.log('修改部门名称')
		},
		deletetag () {
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
			this.data = [{
				name: '张闯',
				mobile: '18612243416',
				email: 'json@bubblelab.com',
				position: '技术经理',
				gender: '男'
			}, {
				name: '赵越',
				mobile: '18612243416',
				email: 'aiden@bubblelab.com',
				position: '前端',
				gender: '男'
			}, {
				name: '黄靖',
				mobile: '18612243416',
				email: 'nora@bubblelab.com',
				position: '后端',
				gender: '女'
			}, {
				name: '许传辉',
				mobile: '18612243416',
				email: 'erico@bubblelab.com',
				position: '测试',
				gender: '女'
			}, {
				name: '靖宇',
				mobile: '18612243416',
				email: 'jing@bubblelab.com',
				position: '运维',
				gender: '男'
			}]
			this.dataTable = this.data
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

.add-tag {
	text-align: right;
	line-height: 32px;
}
</style>
