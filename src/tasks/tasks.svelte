<script>

    import TasksService from '../$services/tasks.service'

    let loading = false
    let tasks = []

    getTasks()

    async function getTasks() {

        loading = true
        const resp = await TasksService.getTasks()
        loading = false

        if(resp.error)
            return error = resp.error.message
        
        tasks = resp.data.tasks
    }

</script>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Deadline</th>
            <th>Categoria</th>
        </tr>
    </thead>
    <tbody>
        {#each tasks as task, index}
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td>{ task.description }</td>
                <td>{ task.date }</td>
                <td>{ task.label }</td>
            </tr>
        {/each}
    </tbody>
</table>