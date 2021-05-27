<template>
  <div class="quotation w-full h-full">
    <el-row class="bg-white p-24 h-auto">
      <el-col :span="22">
        <el-form
          :label-position="$store.state.formLabelPosition"
          ref="form"
          :model="form"
          label-width="80px"
        >
          <el-row>
            <el-col :span="6">
              <el-form-item label="产品名称">
                <el-input v-model="form.productName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <div class="w-full mt-16 bg-white p-24" style="height: calc(100% - 126px)">
      <!-- <div class="mb-16">
        <el-button type="primary" icon="el-icon-plus" @click="toAddQuotation">创建报价</el-button>
      </div> -->
      <el-scrollbar style="width: 100%; height: calc(100% - 106px)">
        <!-- <div style="height: calc(100% - 106px);width: 100%;overflow-y:scroll"> -->

        <el-table size="mini" class="bg-blue-200" :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="序号" width="40"> </el-table-column>
          <el-table-column prop="stockInNumber" label="入库单号"> </el-table-column>
          <el-table-column prop="purchaseNumber" label="采购单号"> </el-table-column>
          <el-table-column prop="stockInDate" label="入库时间"> </el-table-column>
          <el-table-column prop="stockInPerson" label="入库人"> </el-table-column>
          <el-table-column prop="contractTotalAmount" label="合同总数量"> </el-table-column>
          <el-table-column prop="stockInAmount" label="入库数量"> </el-table-column>
          <el-table-column prop="unStockInAmount" label="未入库数量"> </el-table-column>

          <el-table-column width="160" label="操作">
            <template #default="scope">
              <span @click="toAddQuotation" v-if="scope" class="text-blue cursor-pointer text-sm">入库明细单</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- </div> -->
      </el-scrollbar>
      <el-pagination class="mt-20" background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, getCurrentInstance, computed } from 'vue'

  export default defineComponent({
    setup() {
      let { proxy }: any = getCurrentInstance()
      let isInclude = false
      let form: Object = {
        productName: ''
      }

      let tableData: Array<Object> = [
        {
          id: 1,
          stockInNumber: '388632185211052735',
          purchaseNumber: '345345234',
          stockInDate: '2004-07-16',
          stockInPerson: '孔涛',
          contractTotalAmount: 5,
          stockInAmount: 3424,
          unStockInAmount: 3424
        },
        {
          id: 2,
          stockInNumber: '388632185211052735',
          purchaseNumber: '345345234',
          stockInDate: '2004-07-16',
          stockInPerson: '孔涛',
          contractTotalAmount: 5,
          stockInAmount: 3424,
          unStockInAmount: 3424
        },
        {
          id: 3,
          stockInNumber: '388632185211052735',
          purchaseNumber: '345345234',
          stockInDate: '2004-07-16',
          stockInPerson: '孔涛',
          contractTotalAmount: 5,
          stockInAmount: 3424,
          unStockInAmount: 3424
        },
        {
          id: 4,
          stockInNumber: '388632185211052735',
          purchaseNumber: '345345234',
          stockInDate: '2004-07-16',
          stockInPerson: '孔涛',
          contractTotalAmount: 5,
          stockInAmount: 3424,
          unStockInAmount: 3424
        }
      ]

      const toAddQuotation = () => {
        proxy.$store.state.tagsList.forEach((ele: any) => {
          if (ele.path.includes('/StockDetails')) isInclude = true
        })
        if (!isInclude) {
          proxy.$store.commit('setTagItem', {
            path: '/StockDetails',
            name: 'StockDetails',
            title: '产品入库明细单'
          })
        }
        proxy.$router.push({ path: '/StockDetails' })
      }

      return {
        form,
        tableData,
        toAddQuotation
      }
    }
  })
</script>

<style lang="scss">
  @import '../../style/common.scss';
  .quotation {
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      color: $paginationColor;
    }
  }
</style>
