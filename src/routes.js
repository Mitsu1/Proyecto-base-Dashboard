import HomeView from './$views/home.view.svelte'
import LoginView from './$views/login.view.svelte'
import SignupView from './$views/signup.view.svelte'
import TasksView from './$views/tasks.view.svelte'

const routes = [
    {
        name: '/',
        component: HomeView,
    },
    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: needLogin, redirect: 'tasks'}
    },
    {
        name: 'signup',
        component: SignupView,
        onlyIf: {guard: needLogin, redirect: 'tasks'}
    },
    {
        name: 'tasks',
        component: TasksView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
]

function needLogin() {
    const token = localStorage.getItem('token')
    return !token    
}

function isLogin() {
    return localStorage.getItem('token')
}

export { routes }