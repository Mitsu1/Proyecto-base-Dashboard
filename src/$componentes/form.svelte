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
    <Button text="Cancelar" color= "link"/>
    <Button type="submit" text="Confirmar" color= "dark" isLoading ={ loading } />

</form>

