<script>

    import { TasksStore, TaskStore} from '../stores'

    import TasksService from '../$services/tasks.service'
    import Button from '../$componentes/button.svelte'
    import Icon from '../$componentes/icon.svelte'

    let query = {}
    let loading = false

    getTasks()

    async function getTasks() {

        loading = true
        const resp = await TasksService.getTasks()
        loading = false

        if(resp.error)
            return error = resp.error.message
        
        TasksStore.set(resp.data.tasks)
    }

</script>

<div class="comlumns">
    <div class="column is-narrow">
        <Button on:click = {() => TaskStore.modalCreate()} text= "Agregar" color="info" />
    </div>
</div>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de término</th>
            <th>Categoría</th>
        </tr>
    </thead>
    <tbody>
        {#each $TasksStore as task, index}
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td>{ task.description }</td>
                <td>{ task.date }</td>
                <td>{ task.label }</td>
                <td>

                    <Icon on:click={() => TaskStore.modalDelete(task)} icon="ban" />
                    <Icon on:click={() => TaskStore.modalUpdate(task)} icon="edit" />
                    <Icon on:click={() => TaskStore.modalRead(task)} icon="eye" />
                                            
                </td>
            </tr>
        {/each}
    </tbody>
</table>