import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(Antd);
// 路由后续添加
// app.use(router);

app.mount('#app');