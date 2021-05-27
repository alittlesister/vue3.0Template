<template>
  <div
    class="
      o-header
      w-full
      h-64
      text-white
      bg-white
      pl-20
      pr-20
      flex flex-nowrap flex-row
      justify-between
      items-center
    "
  >
    <div class="h-full flex flex-nowrap flex-row justify-between items-center">
      <el-image
        class="w-80 h-full rounded-full"
        :src="list[0]"
        :preview-src-list="list"
        fit="fit"
      ></el-image>
      <div class="ml-10 text-checked text-xl font-bold">华信合业务系统平台</div>
    </div>
    <div class="flex flex-nowrap flex-row justify-between items-center">
      <div class="mr-25 pr-40" style="border-right:1px solid #E5E7EC">
        <el-badge :value="12" type="danger">
        <i class="el-icon-message-solid text-xxxl text-iconColor"></i>
      </el-badge>
      </div>

      <div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link text-standard">
          John Doe
          <i class="text-iconColor el-icon-caret-bottom"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>


      </div>

      <div class="ml-16">
        <el-image
          class="w-38 h-38 rounded-full"
          :src="list[1]"
          :preview-src-list="list"
          fit="fit"
        ></el-image>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent, getCurrentInstance } from 'vue'
  import '../assets/body-bg.jpg'
  import a from '../assets/logo.png'

  export default defineComponent({
    name: 'OHeader',
    setup() {
      let instance: any = getCurrentInstance()
      let isCollapse = ref(instance.proxy.$store.state.collapse)
      let list = ref([a, 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'])

      function collapseToggle() {
        console.log(isCollapse.value)

        instance.proxy.$store.commit('handleCollapse', !isCollapse.value)
        isCollapse.value = instance.proxy.$store.state.collapse
      }
      return {
        isCollapse,
        list,
        collapseToggle
      }
    }
  })
</script>
<style lang="scss" scoped>
  .o-header {
    box-shadow: 0px 1px 6px #eceef4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>