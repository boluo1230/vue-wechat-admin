<template>
  <a-layout id="components-layout">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div v-if="!collapsed" class="logo">
				<span class="logo-wechat">WX</span>
				<span class="logo-admin">Admin</span>
			</div>
			<div v-else class="logo">
				<span class="logo-wechat">W</span>
			</div>
      <a-menu theme="dark" mode="inline" @openChange="onOpenChange" :openKeys="openKeys">
				<a-sub-menu v-for="item in routes" :key="item.mate.key">
					<span slot="title"><a-icon :type="item.mate.icon" /><span>{{ item.mate.title }}</span></span>
					<a-menu-item :key="child.path" v-for="child in item.children">
						<a-icon :type="child.mate.icon" />
						<span>{{ child.mate.title }}</span>
						<router-link :to="child.path"></router-link>
					</a-menu-item>
				</a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', background: '#fff' }">
				<keep-alive>
					<router-view/>
				</keep-alive>
			</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
			collapsed: false,
			rootSubmenuKeys: [],
			openKeys: [],
			routes: []
    }
  },
	created () {
		this.routes = this.$router.options.routes
		this.rootSubmenuKeys = this.routes.map(item => {
			return item.mate.key
		})
		this.openKeys.push(this.rootSubmenuKeys[0])
	},
	methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
			}
			console.log(this.openKeys)
    }
  }
}
</script>
<style>
#components-layout {
	min-height: 100vh;
}

#components-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout .trigger:hover {
  color: #1890ff;
}

#components-layout .logo {
  height: 32px;
  color: #fff;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin: 16px;
}

.logo-wechat {
	color: #64B587;
}

.logo-admin {
	color: #FFF;
}
</style>