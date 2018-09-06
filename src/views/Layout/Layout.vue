<template>
  <a-layout id="components-layout">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" route>
				<a-sub-menu :key="index" v-for="(item, index) in $router.options.routes">
					<span slot="title"><a-icon :type="item.mate.icon" /><span>{{ item.mate.title }}</span></span>
					<a-menu-item v-for="child in item.children">
						<a-icon :type="child.mate.icon" />
						<span>{{ child.mate.title }}</span>
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
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
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
    }
  },
	created () {
		console.log(this.$router.options.routes)
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
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>