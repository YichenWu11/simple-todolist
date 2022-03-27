import Vue from 'vue'
import App from './App.vue'
// 按需引入
import { Button, MessageBox, Message, Table, TableColumn, Input, InputNumber, Dialog, Form, FormItem,
         Select,Checkbox,Radio,Switch,DatePicker,TimePicker, RadioGroup, CheckboxGroup, Option, Col  } from 'element-ui';

// 引入路由
import router from './routers/index'

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

// 注册成全局组件
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Dialog.name, Dialog)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Select.name, Select)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Radio.name, Radio)
Vue.component(Switch.name, Switch)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Option.name, Option)
Vue.component(Col.name, Col)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // 注册仓库：组件实例的身上会多一个属性 $store
}).$mount('#app')
