<template>
  <div class="add-quotation w-full h-full">
    <div class="w-full flex justify-between items-center">
      <div>
        <div class="text-checked text-ls">新建销售报价</div>
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
      <div v-if="status === 'audit'">
        <el-button type="primary" @click="handleAuditOrder">审核</el-button>
      </div>
      <!-- 审核人按钮 -->
      <!-- <div v-if="status === 'toExamine'">
        <el-button type="primary">审核</el-button>
      </div>
      <div v-if="status === 'cancelExamine'">
        <el-button>撤销审核</el-button>
      </div> -->
    </div>
    <el-scrollbar class="w-full mt-20 bg-white" style="height: calc(100% - 65px)">
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
              <el-form :label-position="$store.state.formLabelPosition" :disabled="status != 'edit'" :inline="true" ref="form" :model="form">
                <el-form-item label="报价主题">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="关联项目">
                  <el-input v-model="form.project"></el-input>
                </el-form-item>
                <el-form-item label="客户名称">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item label="项目负责人">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item label="报价人">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item label="客户联系人">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item label="客户联系电话">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
                <el-form-item label="报价次数">
                  <el-input v-model="form.customName"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </TitleStyle>
          <TitleStyle
            :show="true"
            class="flex-grow flex-shrink"
            style="width: 670px"
            :title="activities[1].content"
            :tips="'（财务确认完，不可修改金额等信息）'"
          >
            <template #content>
              <el-form :label-position="$store.state.formLabelPosition"  :disabled="status != 'edit'" :inline="true" ref="form" :model="receiptInfo">
                <el-form-item label="回款账单">
                  <el-select v-model="receiptInfo.bill" placeholder="请选择">
                    <el-option label="2021-05-10（第一期）" value="1"></el-option>
                    <el-option label="2021-05-10（第二期）" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户付款日期">
                  <el-select v-model="receiptInfo.payDate" placeholder="请选择">
                    <el-option label="2021-05-10（第一期）" value="1"></el-option>
                    <el-option label="2021-05-10（第二期）" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户付款金额">
                  <el-input v-model="receiptInfo.payAmount"></el-input>
                </el-form-item>
                <el-form-item label="剩余回款金额">
                  <el-input v-model="receiptInfo.receiptAmount"></el-input>
                </el-form-item>
                <el-form-item label="客户付款截图">
                  <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-remove="handleRemove"
                    :on-preview="handlePictureCardPreview"
                    :file-list="receiptInfo.screenshot"
                  >
                    <div class="w-full h-full bg-uploadBg flex flex-col justify-center items-center">
                      <i class="el-icon-plus rounded-full bg-uploadIconBg p-10 font-bold" style="color:#fff"></i>
                      <span class="el-upload__text mt-10 text-iconColor">上传图片</span>
                    </div>
                    <el-dialog v-model="dialogVisible" center>
                      <div class="w-full">
                        <img :src="dialogImageUrl" alt="" />
                      </div>
                      <template #header></template>
                    </el-dialog>
                  </el-upload>
                </el-form-item>
              </el-form>
            </template>
          </TitleStyle>
          <TitleStyle :show="false" class="flex-grow flex-shrink" :title="activities[2].content">
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


    <el-dialog title="审核" v-model="auditOrder" :before-close="handleAuditOrder">
      <el-form   ref="form" :model="auditForm">
                <el-form-item label="审核">
                   <el-radio-group v-model="form.isPass">
                    <el-radio label="审核通过"></el-radio>
                    <el-radio label="审核不通过"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="审核人">
                   <el-row>
                     <el-col :span="8">
                       <el-input v-model="form.auditPerson"></el-input>
                     </el-col>
                   </el-row>
                </el-form-item>
                <el-form-item label="备注信息">
                  <el-row>
                     <el-col :span="24">
                       <el-input type="textarea" v-model="form.remarks"></el-input>
                     </el-col>
                   </el-row>
                   
                </el-form-item>
              </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="auditOrder = false">取 消</el-button>
          <el-button type="primary" @click="auditOrder = false">确 定</el-button>
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
      let status = ref('audit')
      let singleChecked: Ref = ref('0')
      let activities: Ref = ref([
        {
          content: '合同基本信息',
          timestamp: '2018-04-15',
          type: 'primary'
        },
        {
          content: '回款信息',
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
      let receiptInfo: Ref = ref({
        bill: '',
        payDate: '',
        payAmount: '',
        receiptAmount: '',
        screenshot: []
      })

       let auditForm = {
        isPass:"审核通过",
        auditPerson:'',
        remarks:''
      }

      let dialogImageUrl = ref('')
      let dialogVisible = ref(false)
      let auditOrder = ref(false);
      const handleCurrentChange = (val: any) => {
        // console.log(val)
      }
      const getCurrentRow = (val: any) => {
        // console.log(val)
      }

      const handleRemove = (file: File) => {
        console.log(file)
      }
      const handleAuditOrder = ()=>{
        auditOrder.value = !auditOrder.value;
      }

      const handlePictureCardPreview = (file: File) => {
        dialogImageUrl.value = file.url
        receiptInfo.value.screenshot.push(file)
        dialogVisible.value = true
        console.log(receiptInfo)
      }
      const handleDownload = (file: File) => {
        console.log(file)
      }

      return {
        activities,
        steps,
        form,
        receiptInfo,
        status,
        handleCurrentChange,
        getCurrentRow,
        singleChecked,
        handleRemove,
        handlePictureCardPreview,
        handleDownload,
        dialogVisible,
        dialogImageUrl,
        auditOrder,
        handleAuditOrder,
        auditForm
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
<style lang="scss">
  .add-quotation {
    .el-upload--picture-card{
      line-height: 20px;
      border:0;
      border-radius: 4px;
      overflow: hidden;
    }
  }
</style>
