<template>
  <el-scrollbar
    class="h-full border-gray-100 border-r-2 border-solid bg-white define-sidebar"
    :class="isCollapse ? 'w-65 define-sidebar-active' : 'w-264 '"
  >
    <div>
      <div
        class="
          categlories
          overflow-hidden
          w-full
          h-56
          flex
          justify-between
          items-center
          pl-16
          pr-16
        "
        :class="isCollapse ? 'toggle-active' : ''"
      >
        <span class="mr-10">全部分类</span>
        <i
          class="text-xxl text-gray-200"
          @click="collapseToggle"
          :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        ></i>
      </div>
    </div>
    <div class="sidebar">
      <el-menu
        v-if="routeObj"
        :collapse="isCollapse"
        :collapse-transition="false"
        class="h-full"
        @open="handleOpen"
        @close="handleClose"
        :default-active="defaultMenu"
        :router="true"
      >
        <template v-for="(item, index) in routeObj" :key="index">
          <el-submenu v-if="item.children" :index="item.path">
            <template #title>
              <i v-show="item.icon" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              @click="recordPage(child)"
              v-for="(child, i) in item.children"
              :key="i"
              :index="child.path"
            >
              <i v-show="child.icon" :class="child.icon"></i>
              <template #title>{{ child.title }}</template>
            </el-menu-item>
          </el-submenu>

          <!-- <el-menu-item @click="recordPage(child)" v-else :index="item.path">
            <i v-show="item.icon" :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item> -->

          <el-menu-item v-if="!item.children" @click="recordPage(item)" :index="item.path">
            <i v-show="item.icon" :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
  import { ref, defineComponent, getCurrentInstance } from 'vue'
  import routesList from '../router/route'
  export default defineComponent({
    name: 'Slidebar',
    computed: {
      isCollapse() {
        let instance: any = getCurrentInstance()
        return instance.proxy.$store.state.collapse
      },
      defaultMenu() {
        let instance: any = getCurrentInstance()
        return instance.proxy.$store.state.defaultMenu
      }
    },
    setup() {
      let { proxy }: any = getCurrentInstance()
      let list = ref(['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'])
      let routeObj = routesList
      let isCollapse = ref(proxy.$store.state.collapse)

      proxy.$store.commit('setDefaultMenu', proxy.$route.fullPath)

      const recordPage = (item: any) => {
        let list: Array<object> = proxy.$store.state.tagsList
        let isInclude: boolean = false
        list.forEach((ele: any) => {
          if (ele.path.includes(item.path)) isInclude = true
        })
        if (!isInclude) proxy.$store.commit('setTagItem', item)
        proxy.$store.commit('setDefaultMenu', item.path)
      }

      const collapseToggle = () => {
        proxy.$store.commit('handleCollapse', !isCollapse.value)
        isCollapse.value = proxy.$store.state.collapse
      }
      const handleOpen = (key: number, keyPath: string) => {
        // console.log(key, keyPath)
      }
      const handleClose = (key: number, keyPath: string) => {
        // console.log(key, keyPath)
      }

      return {
        list,
        routeObj,
        recordPage,
        collapseToggle,
        handleOpen,
        handleClose
      }
    }
  })
</script>
<style lang="scss" scoped>
  @import '../style/common.scss';
  .define-sidebar {
    // normal
    .el-submenu__title i,
    .el-menu-item i {
      color: $sideIconColor;
    }
    //
    .el-menu-item.is-active {
      background: $sideCheckedBgColor;
      border-right: 2px solid $sideCheckedColor;
      color: $sideCheckedColor;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      background: $sideHoverBgColor;
      color: $sideHoverColor;
    }
    .categlories {
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      > span {
        display: inline-block;
        white-space: nowrap;
      }
      > i {
        color: $sideIconColor;
      }
    }
    .categlories.toggle-active {
      justify-content: center;
      > span {
        display: none;
      }
    }
    .sidebar {
      .el-menu {
        border: 0;
      }
    }
  }
  .define-sidebar-active{
    .el-menu-item.is-active {
      background: $sideCheckedColor;
      border:none;
      color: #fff;
    }
  }
</style>
<style lang="scss">
  .sidebar {
    .el-menu {
      border: 0;
    }
  }
</style>
