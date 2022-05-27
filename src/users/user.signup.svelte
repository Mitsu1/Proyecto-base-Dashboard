<script>

    import { navigateTo } from 'svelte-router-spa'
    import UsersService from '../$services/users.service'

    import InputPassword from '../$componentes/input.password.svelte'
    import InputPhone from '../$componentes/input.phone.svelte'
    import Input from '../$componentes/input.svelte'
    import Form from '../$componentes/form.svelte'

    let data = {}
    let loading = false
    let error = null

    async function userRegister() {

        loading = true
        const resp = await UsersService.userRegister(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        const token = resp.data.session.token
        localStorage.setItem('token', token)

        navigateTo('tasks')
    }

</script>

<Form on:submit={ userRegister } loading={loading} name="signup">

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.firstName } label="Nombre" placeholder="Ingrese nombre" />
        </div>
        <div class="column">
            <Input bind:value={ data.lastName } label="Apellido" placeholder="Ingrese apellido" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <InputPhone bind:value={ data.phone }/>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.email } label="Correo" placeholder="Ingrese correo" />
        </div>
    </div>    
    <div class="columns">
        <div class="column">
            <InputPassword bind:value={ data.password } />
        </div>
    </div>
    {#if error}
        <div class="notification">{ error }</div>
    {/if}
</Form>