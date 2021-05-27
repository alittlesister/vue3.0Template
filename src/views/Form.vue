<template>
  <div class="form bg-white w-full h-full">
     <el-radio :value="radio" label="1">备选项</el-radio>
     <el-input-number :value="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>
<script>
import { defineComponent,reactive } from "vue";
export default defineComponent({
  name:"Form",
  setup(){
    let num = 0
    let radio = false
    const handleChange = ()=>{
      console.log(num);
      num++
    }

    return {
      handleChange,
      num,
      radio
    }
  }
})
</script>
