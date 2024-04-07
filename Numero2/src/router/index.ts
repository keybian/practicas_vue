import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ForgotView from '../views/ForgotView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashBoardView from '../views/DashBoardView.vue'
import { useAuthStore } from '../store/authLogin'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LoginView,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/login',
    name:'login',
    component:LoginView,
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView,
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/forgot',
    name:'forgot',
    component:ForgotView,
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:DashBoardView,
    meta:{
      requireAuth:true
    }
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  
  const auth=useAuthStore()
  const needAuth = to.meta.requireAuth
  console.log(auth.jwt.length)
  console.log(to.meta.requireAuth)
  if(needAuth && (auth.jwt.length ==0)){
    alert('Login Incorrecto,Intente de Nuevo')
    next('login')
    
  }else{
    next()
  }
})

export default router
