<template>
  <div class="quotation w-full h-full">
    <el-row class="bg-white p-24 h-auto">
      <el-col :span="22">
        <el-form  :label-position="$store.state.formLabelPosition" ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="单据编号">
                <el-input v-model="form.number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="客户名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="项目名称">
                <el-input v-model="form.projectName"></el-input>
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
      <div class="mb-16">
        <el-button type="primary" icon="el-icon-plus" @click="toAddQuotation">创建报价</el-button>
      </div>
      <el-scrollbar style="width: 100%; height: calc(100% - 106px)">
        <!-- <div style="height: calc(100% - 106px);width: 100%;overflow-y:scroll"> -->
        <el-table size="mini" class="bg-blue-200" :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="序号" width="40"> </el-table-column>
          <el-table-column prop="orderContract" label="订单合同"> </el-table-column>
          <el-table-column prop="projectName" label="项目名称"> </el-table-column>
          <el-table-column prop="receiptDate" label="回款期数"> </el-table-column>
          <el-table-column label="回款/审核状态">
            <template #default="scope">
              <div v-if="scope.row.auditStatus === 1" class="text-green">
                <i class="el-icon-success"></i>
                <span>已到账</span>
              </div>
              <div v-if="scope.row.auditStatus === 2" class="text-red">
                <i class="el-icon-error"></i>
                <span>未到账</span>
              </div>
              <div v-if="scope.row.auditStatus === 0" class="text-blue">
                <i class="el-icon-success"></i>
                <span>待确认</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="160" label="操作">
            <template #default="scope">
              <span v-if="scope" class="text-blue text-sm">编辑/审核</span>
              <span class="text-blue text-sm ml-20">删除</span>
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
        number: '',
        name: '',
        projectName: ''
      }
      let tableData: Array<Object> = [
        {
          id: 1,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        },
        {
          id: 2,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 1
        },
        {
          id: 3,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 2
        },
        {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        }, {
          id: 4,
          orderContract: '福海小学',
          projectName: '蔡秀英',
          receiptDate: '第一期30%，应回款金额1000',
          auditStatus: 0
        },
      ]

      const toAddQuotation = () => {
        proxy.$store.state.tagsList.forEach((ele: any) => {
          if (ele.path.includes('/ReceiptEdit')) isInclude = true
        })
        if (!isInclude) {
          proxy.$store.commit('setTagItem', {
            path: '/ReceiptEdit',
            name: 'ReceiptEdit',
            title: '编辑客户回款单'
          })
        }
        proxy.$router.push({ path: '/ReceiptEdit' })
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
