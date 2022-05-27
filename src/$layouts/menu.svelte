<script>
    
    import { navigateTo } from 'svelte-router-spa'
    import Button from '../$componentes/button.svelte'

    function logout() {
        localStorage.removeItem('token')
        navigateTo('login')
    }
    
</script>

<div class="columns">
    <div class="column">
        <Button on:click={ logout } text="Salir" color="dark" />
    </div>
</div>