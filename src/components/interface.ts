export interface Props {
  defaultValue: any,
  tagName:String,
  obj: Object,
  'update:defaultValue':{
    type:Function
  }
}