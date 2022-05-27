<script>
    
    import Tasks from '../tasks/tasks.svelte'

    import MenuLayout from '../$layouts/menu.svelte'

</script>

<div class="container">
    <div class="columns">
        <div class="column">
            <MenuLayout />
        </div>
    </div>
</div>
<div class="container">
    <div class="columns">
        <div class="column">
            <Tasks />
        </div>
    </div>
</div>