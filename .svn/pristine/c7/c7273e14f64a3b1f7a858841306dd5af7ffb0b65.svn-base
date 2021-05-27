<template>
  <div class="draggable">
    <el-table
      class="w-full mt-20"
      :data="tableData2"
      row-key="id"
      ref="tableRef"
      :span-method="arraySpanMethod"
      border
    >
    dropCol
      <el-table-column v-for="(item,index) in dropCol" :key="index" :column-key="'col_'+index"  :prop="item.prop" :label="item.label">
        <template v-if="item.label === '移动'" #default="scope">
            <i v-if="scope" class="el-icon-rank cursor-move"></i>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" sortable label="数值 1"> </el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2"> </el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
  import { ref,defineComponent, getCurrentInstance,onMounted } from 'vue'
  import Sortable from 'sortablejs'
  export default defineComponent({
    setup() {
      const{ proxy} = getCurrentInstance();
      const tableRef = ref(null);
      let sortable = ref(null);
      let dropCol = ref([
        {
          label: '移动',
          prop: ''
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '数值一',
          prop: 'amount1'
        },
        {
          label: '数值二',
          prop: 'amount2'
        },
        {
          label: '数值三',
          prop: 'amount3'
        },
      ]);

      let tableData2 = ref( [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ])
      let rowDrop = ()=> {
      const tbody = document.querySelector('.el-table__body-wrapper tbody') 
      Sortable.create(tbody, {
        handle:'.el-icon-rank',
        onEnd({ newIndex, oldIndex }) {
          const currRow = tableData2.value.splice(oldIndex, 1)[0]
          tableData2.value.splice(newIndex, 0, currRow)
        }
      })
    }

    let columnDrop = ()=> {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          let colArr = JSON.parse(JSON.stringify(dropCol.value));
          let tableArr = JSON.parse(JSON.stringify(tableData2.value));
          const oldItem = colArr[evt.oldIndex]
          const oldItemTable = tableData2[evt.oldIndex]
          colArr.splice(evt.oldIndex, 1)
          colArr.splice(evt.newIndex, 0, oldItem)
  
          tableArr.splice(evt.oldIndex,1);
          tableArr.splice(evt.newIndex,0,oldItemTable);

          dropCol = ref(colArr);
          tableData2 = ref(tableArr);
        }
      })
    }
    onMounted(()=>{
      rowDrop();
      columnDrop();
    })

      return {
        tableData2,
        dropCol,
        tableRef
      }
    }
  })
</script>
