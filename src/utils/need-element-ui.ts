//按需引入
import { Button,Dropdown,DropdownMenu,DropdownItem,Form,FormItem,Input,Message,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,Alert,Tree,Table,TableColumn,Loading,Tag,Select,Checkbox,CheckboxGroup,Option,Col,DatePicker,Radio,RadioGroup,Switch,TimePicker} from 'element-ui';
const components = [Button,Dropdown,DropdownMenu,DropdownItem,Form,FormItem,Input,Message,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,Alert,Tree,Table,TableColumn,Tag,Select,Checkbox,CheckboxGroup,Option,Col,DatePicker,Radio,RadioGroup,Switch,TimePicker]

const install = (Vue:any, opts = {})=> {
  components.forEach(component => {
    //console.log(component)
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = Message;
  Vue.prototype.$loading = Loading.service;
  Vue.use(Loading.directive);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install }
