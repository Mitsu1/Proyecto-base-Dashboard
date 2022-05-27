<script>

    export let text = ''
    export let color = ''
    export let type = 'button'

    export let isLoading = false

</script>

<button
    on:click
    type={ type }
    class="button is-{ color }"
    class:is-loading={ isLoading } 
    >
    <span>{ text }</span>

</button>