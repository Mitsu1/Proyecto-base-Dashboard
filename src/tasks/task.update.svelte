<script>

    import { createEventDispatcher } from 'svelte'
    import { TasksStore, TaskStore } from '../stores'
    
    import TasksService from '../$services/tasks.service'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'
    import InputDate from '../$componentes/input.date.svelte'

    const dispatch = createEventDispatcher()

    $: $TaskStore && updateData()

    let data = {}
    let loading = false
    let error = null
    
    async function updateTask(){
        
        loading = true
        const resp = await TasksService.updateTask($TaskStore._id, data)
        loading = false
        
        if(resp.error)
            return error = resp.error.message

        TasksStore.replace(resp.data)

        dispatch('updated', resp.data)
    }   

    function updateData() {
        data = {
            name: $TaskStore.name,
            date: $TaskStore.date,
            description: $TaskStore.description
        }
    }

</script>

<Form on:submit= { updateTask } {loading} >
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Nombre de la tarea" placeholder= "Ingrese nombre de la tarea" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <InputDate bind:value={ data.date } label="Fecha de término" placeholder= "Defina una fecha de término para la tarea" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.description } label="Descripción" placeholder= "Ingrese una descripción" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.label } label="Categoría" placeholder= "Seleccione una categoría" />
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}
</Form>