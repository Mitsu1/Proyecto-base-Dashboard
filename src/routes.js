import HomeView from './$views/home.view.svelte'
import LoginView from './$views/login.view.svelte'

const routes = [
    {
        name : '/',
        component: HomeView,
    },
    {
        name : 'login',
        component: LoginView,
    }
]

export { routes }