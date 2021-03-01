import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Upload from "@/views/Upload.vue"
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authRequired : true
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignIn,
    meta: {
      anonRequired : true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
    meta: {
      anonRequired : true
    }
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
    meta: {
      authRequired : true
    }
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})


// Route Guarding

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  }
)};

router.beforeEach(async (to, from, next) => {
  const user = await firebase.getCurrentUser()
  const authRequired = to.matched.some(record => record.meta.authRequired);
  if (authRequired && !user){
    next('signin');
  }else{
    next();
  }
  const anonRequired = to.matched.some(record => record.meta.anonRequired);
  if (anonRequired && user){
    next('/');
  }else{
    next();
  }
});

export default router
