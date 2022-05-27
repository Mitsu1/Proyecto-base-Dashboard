<script>

    export let value = ''
    export let color = ''
    export let label = 'Teléfono'
    export let placeholder = 'Ingrese numero telefónico'
    
    export let isLoading = false

</script>

<div class="field">
    {#if label}
        <label for="" class="label">{ label }</label>
    {/if}

    <div 
        class="control" 
        class:is-loading={ isLoading }
    >
        <input 
            bind:value 
            type="tel" 
            class= "input is-{ color }" 
            placeholder={ placeholder }
        >
    </div>
</div>
