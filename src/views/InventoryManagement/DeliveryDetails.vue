<template>
  <div class="add-quotation w-full h-full">
    <div class="w-full flex justify-between items-center">
      <div>
        <div class="text-checked text-ls">出库明细单</div>
        <div class="text-standard text-xs"> 创建时间：2021-05-08 17:40：12</div>
      </div>
      <!-- 被审核人提交资料 -->
      <div v-if="status === 'edit'">
        <el-button>取消</el-button>
        <el-button type="primary" @click="status = 'examine'">保存</el-button>
      </div>
      <div v-if="status === 'examine'">
        <el-button type="primary" @click="status = 'examining'">提交审核</el-button>
      </div>
      <div v-if="status === 'examining'">
        <el-button>撤销审核</el-button>
      </div>
      <!-- 审核人按钮 -->
      <!-- <div v-if="status === 'toExamine'">
        <el-button type="primary">审核</el-button>
      </div>
      <div v-if="status === 'cancelExamine'">
        <el-button>撤销审核</el-button>
      </div> -->
    </div>
    <el-scrollbar class="w-f
    ull mt-20 bg-white" style="height: calc(100% - 65px)">
      <div class="w-full flex flex-row flex-nowrap justify-between">
        <div
          style="width: calc(100% - 200px); height: auto"
          class="flex-shrink flex-grow pl-100 pr-100 relative"
        >
          <i
            :class="{
              'icon-yijujue text-red': status === 'refuse',
              'icon-daishenhe text-blue': status === 'examining',
              'icon-yitongguo text-green': status === 'pass'
            }"
            class="audit-status iconfont"
          ></i>
          <TitleStyle :show="true" class="flex-grow flex-shrink" :title="activities[0].content">
            <template #content>
              <el-form
                :label-position="$store.state.formLabelPosition"
                :disabled="status != 'edit'"
                :inline="true"
                ref="form"
                :model="form"
              >
                <el-form-item required label="入库订单号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item required label="采购订单">
                  <el-input v-model="form.project"></el-input>
                </el-form-item>
                <el-form-item required label="入库时间">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item required label="入库人">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item required label="入库类型">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </TitleStyle>
          <TitleStyle :show="true" class="flex-grow flex-shrink" :title="activities[1].content">
            <template #content>
              <el-table class="w-full" :data="tableData" border>
                <el-table-column label="操作">
                  <template #default="props">
                    <i v-if="props.row.id" class="el-icon-delete text-red"></i>
                  </template>
                </el-table-column>
                <el-table-column label="序号" prop="id"></el-table-column>
                <el-table-column label="产品名称">
                  <template #default="props">
                    <div class="flex flex-row flex-nowrap">
                      <span>{{ props.row.productName }}</span>
                      <i class="ml-10 text-blue iconfont icon-icon-shaixuan"></i>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="purchaseNum" label="采购数量"></el-table-column>
                <el-table-column prop="model" label="型号"></el-table-column>
                <el-table-column prop="storagedAmount" label="入库数量"></el-table-column>
                <el-table-column prop="toStorageAmount" label="待入库数量"></el-table-column>
                <el-table-column prop="remarks" label="备注"></el-table-column>
              </el-table>
              <div class="text-right subtotal text-standard">
                <span class="ml-40">合同总数量：<span class="text-standard text-xl">396.00</span></span>
                <span class="ml-40">合同总数量：<span class="text-standard text-xl">396.00</span></span>
                <span class="ml-40">合同总数量：<span class="text-standard text-xl">396.00</span></span>
              </div>
            </template>
            <template #action>
              <el-button
                :disabled="status !== 'edit'"
                @click="toggleQuotationDefail = true"
                type="primary"
                icon="el-icon-plus"
                >添加一行</el-button
              >
            </template>
          </TitleStyle>
          <TitleStyle :show="true" class="flex-grow flex-shrink" :title="activities[2].content">
            <template #content>
              <el-timeline>
                <el-timeline-item
                  v-for="(step, index) in steps"
                  :key="index"
                  size="normal"
                  :type="step.type"
                  :timestamp="step.timestamp"
                >
                  {{ step.content }}
                </el-timeline-item>
              </el-timeline>
            </template>
          </TitleStyle>
        </div>
        <div class="w-200 pt-32">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              size="normal"
              :type="activity.type"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </el-scrollbar>

    <!-- 弹出层  ————  报价产品明细 -->
    <el-dialog title="选择产品" v-model="toggleQuotationDefail" :before-close="handleCloseDetail">
      <div>
        <el-form :label-position="$store.state.formLabelPosition" :inline="true" ref="form">
          <el-form-item required label="产品名称">
            <el-input v-model="search"></el-input>
          </el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form>
        <el-radio-group v-model="singleChecked">
          <el-table
            class="w-full"
            :data="addDetailTable"
            border
            highlight-current-row
            @current-change="handleCurrentChange"
          >
            <el-table-column label="选择" width="60" align="center">
              <template #default="props">
                <el-radio
                  :label="props.row.id"
                  v-model="singleChecked"
                  @change="getCurrentRow(props.row.id)"
                >
                  {{ '' }}
                </el-radio>
              </template>
            </el-table-column>
            <el-table-column width="40" label="序号" prop="id"></el-table-column>
            <el-table-column label="产品名称" prop="name"></el-table-column>
            <el-table-column label="产品编号" prop="number"></el-table-column>
            <el-table-column label="型号" prop="productModel"></el-table-column>
            <el-table-column label="销售价" prop="salesPrice"></el-table-column>
            <el-table-column label="进货价" prop="purchasePrice"></el-table-column>
            <el-table-column label="库存数量" prop="inventory"></el-table-column>
          </el-table>
        </el-radio-group>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="toggleQuotationDefail = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, Ref, computed, getCurrentInstance } from 'vue'
  import TableInput from '../../components/TableInput.vue'
  import TitleStyle from '../../components/TitleStyle.vue'
  export default defineComponent({
    components: {
      TitleStyle,
      TableInput
    },
    setup() {
      let { proxy }: any = getCurrentInstance()
      let num: Ref = ref(0)
      let status = ref('edit')
      let singleChecked: Ref = ref('0')
      let activities: Ref = ref([
        {
          content: '基本信息',
          timestamp: '2018-04-15',
          type: 'primary'
        },
        {
          content: '产品明细',
          timestamp: '2018-04-13',
          type: 'primary'
        },
        {
          content: '动态信息',
          timestamp: '2018-04-11'
        }
      ])

      let steps: Ref = ref([
        {
          content: '吴冬修改报价产品明细',
          timestamp: '2021-05-08 17:40:12'
          // type: 'primary'
        },
        {
          content: '李晓鹏审核未通过',
          timestamp: '2021-05-07 17:40:12'
          // type: 'primary'
        },
        {
          content: '吴冬提交审核',
          timestamp: '2021-05-06 17:40:12'
        },
        {
          content: '吴冬创建报价单',
          timestamp: '2021-05-05 17:40:12'
        }
      ])
      let form = {
        name: '',
        project: '',
        customName: ''
      }

      let tableData = [
        {
          id: 1,
          productName: 'dsargtws',
          purchaseNum: '12',
          model: '198.00',
          storagedAmount: '0%',
          toStorageAmount: '198.00',
          remarks: '198.00'
        },
        {
          id: 2,
          productName: 'dsargtws',
          purchaseNum: '12',
          model: '198.00',
          storagedAmount: '0%',
          toStorageAmount: '198.00',
          remarks: '198.00'
        },
        {
          id: 3,
          productName: 'dsargtws',
          purchaseNum: '12',
          model: '198.00',
          storagedAmount: '0%',
          toStorageAmount: '198.00',
          remarks: '198.00'
        },
        {
          id: 4,
          productName: 'dsargtws',
          purchaseNum: '12',
          model: '198.00',
          storagedAmount: '0%',
          toStorageAmount: '198.00',
          remarks: '198.00'
        },
        {
          id: 5,
          productName: 'dsargtws',
          purchaseNum: '12',
          model: '198.00',
          storagedAmount: '0%',
          toStorageAmount: '198.00',
          remarks: '198.00'
        }
      ]
      let addDetailTable = [
        {
          id: 1,
          name: '海康威视球机摄像头',
          number: 'HV3088',
          productModel: 'HM-988137',
          inventory: '122',
          salesPrice: '198.00',
          purchasePrice: '198.00',
          checked: ''
        },
        {
          id: 2,
          name: '海康威视球机摄像头',
          number: 'HV3088',
          productModel: 'HM-988137',
          inventory: '122',
          salesPrice: '198.00',
          purchasePrice: '198.00',
          checked: ''
        },
        {
          id: 3,
          name: '海康威视球机摄像头',
          number: 'HV3088',
          productModel: 'HM-988137',
          inventory: '122',
          salesPrice: '198.00',
          purchasePrice: '198.00',
          checked: ''
        }
      ]
      let quotationFile = [
        { number: 1, fileName: '验收文件.doc', uploadDate: 'HV3088', uploadPerson: 'HM-988137' },
        { number: 2, fileName: '验收文件.doc', uploadDate: 'HV3088', uploadPerson: 'HM-988137' },
        { number: 3, fileName: '验收文件.doc', uploadDate: 'HV3088', uploadPerson: 'HM-988137' }
      ]
      let toggleQuotationDefail: Ref = ref(false)
      let search: Ref = ref('摄像头')

      let total = computed(() => {
        let number = 0
        tableData.forEach((el: any, index: number) => {
          number += Number(el.subtotal)
        })
        num.value = number + '.00'
        return num.value
      })

      const changeValue = (val: any, name: any, obj: any) => {
        obj.row[name] = val
        console.log(tableData)
      }
      const addType = (index: number) => {
        activities.value[index].type === 'primary'
          ? (activities.value[index].type = '')
          : (activities.value[index].type = 'primary')
        for (let a = index; index < activities.value; a++) {
          activities.value[a].type = ''
        }
      }
      const handleCloseDetail = () => {
        toggleQuotationDefail.value = false
      }

      const handleCurrentChange = (val: any) => {
        // console.log(val)
      }
      const getCurrentRow = (val: any) => {
        // console.log(val)
      }

      const handleUpload = (file: any) => {
        console.log(file)
      }

      return {
        activities,
        steps,
        form,
        tableData,
        addDetailTable,
        changeValue,
        addType,
        total,
        quotationFile,
        status,
        handleCloseDetail,
        toggleQuotationDefail,
        search,
        handleCurrentChange,
        getCurrentRow,
        singleChecked,
        handleUpload
      }
    }
  })
</script>

<style lang="scss" scoped>
  .add-quotation {
    .audit-status {
      position: absolute;
      top: -85px;
      right: 2%;
      font-size: 200px;
      transform: rotateZ(60deg);
      opacity: 0.4;
    }
    .el-form-item__label {
      width: 120px;
    }
    .subtotal {
      border-bottom: 1px solid #ebeef5;
      border-left: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
      padding: 12px 54px 12px 0;
    }
  }
</style>
