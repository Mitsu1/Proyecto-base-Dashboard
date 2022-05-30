<script>

    import { createEventDispatcher } from 'svelte'
    import { TasksStore } from '../stores'
    import TasksService from '../$services/tasks.service'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'
    import InputDate from '../$componentes/input.date.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let loading = false
    let error = null
    
    async function createTask(){
        
        loading = true
        const resp = await TasksService.createTask(data)
        loading = false
        
        if(resp.error)
            return error = resp.error.message

        TasksStore.append(resp.data)

        dispatch('created', resp.data)
    }   

</script>

<Form on:submit= { createTask } {loading} >
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