import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import vuex from './store/index';
import dayjs from "./plugin/dayjs";
import 'element-plus/lib/theme-chalk/index.css';
import './index.css';
import "./style/iconfont.css";
import "./style/common.scss";

import {
  ElButton,
  ElRadio,
  ElRow,
  ElCol,
  ElInput,
  ElCheckbox,
  ElInputNumber,
  ElImage,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElSubmenu,
  ElScrollbar,
  ElPagination,
  ElBadge,
  ElDropdown, 
  ElDropdownMenu, 
  ElDropdownItem, 
  ElCollapse, 
  ElCollapseItem, 
  ElTimeline,
  ElTimelineItem, 
  ElUpload, 
  ElLoading, 
  ElDialog,
  ElSelect,
  ElOption,
} from 'element-plus';


const app = createApp(App);

app
  .use(router)
  .use(vuex)
  .use(ElButton)
  .use(ElInput)
  .use(ElCheckbox)
  .use(ElInputNumber)
  .use(ElImage)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElMenu)
  .use(ElMenuItem)
  .use(ElMenuItemGroup)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElSubmenu)
  .use(ElScrollbar)
  .use(ElPagination)
  .use(ElRadio)
  .use(ElBadge)
  .use(ElRow)
  .use(ElCol)
  .use(ElDropdown)
  .use(ElDropdownMenu)
  .use(ElDropdownItem)
  .use(ElCollapse)
  .use(ElCollapseItem)
  .use(ElTimeline)
  .use(ElTimelineItem)
  .use(ElUpload)
  .use(ElLoading)
  .use(ElDialog)
  .use(ElSelect)
  .use(ElOption)
  .use(dayjs)
  
  .mount('#app');
