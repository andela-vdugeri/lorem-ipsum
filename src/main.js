import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Login from './auth/components/Login.vue'
import Register from './auth/components/Register.vue'
import Students from './students/components/Students.vue'
import Student from './students/components/Student.vue'
import Staff from './staff/components/Staff.vue'
import NewStaff from './staff/components/NewStaff.vue'
import studentProfileUpdate from './students/components/UpdateProfile.vue'
import ConfirmEmail from './auth/components/Confirm.vue'

Vue.use(Router)
Vue.use(Resource)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/students', component: Students },
  { path: '/student', component: Student },
  { path: '/students/:id', component: studentProfileUpdate, name: 'student-profile' },
  { path: '/staff', component: Staff },
  { path: '/staff/new', component: NewStaff },
  { path: '/email/confirm', component: ConfirmEmail}
]

export const router = new Router({
  routes,
  linkActiveClass: 'active'
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
  router
})
