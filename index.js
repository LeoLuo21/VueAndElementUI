import Home from './view/Home.js';
import MyHeader from './components/MyHeader.js'
import MyFooter from './components/MyFooter.js'
import SideBar from './components/SideBar.js'
import StudentGrades from './components/StudentGrades.js'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/student/grades',
        name: 'StudentGrades',
        component: StudentGrades
      }  
    ],
  },  
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});


const app = Vue.createApp({});
app.use(ElementPlus);
app.component('Home',Home);
app.component('my-header',MyHeader);
app.component('my-footer',MyFooter);
app.component('side-bar',SideBar);

app.use(router);
app.mount("#app");
