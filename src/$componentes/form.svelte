<script>
    
    import { navigateTo } from 'svelte-router-spa'
    import Button from './button.svelte'
    
    export let loading = false

    function signup() {        
        navigateTo('signup')
    }
</script>

<form on:submit|preventDefault>
    
    <slot></slot>
    <Button on:click={ signup } text="Registro" color= "link"/>
    <Button type="submit" text="Iniciar sesión" color= "dark" isLoading ={ loading } />

</form>

