<script>

    import { TaskStore } from '../stores'
    
    import MenuLayout from '../$layouts/menu.svelte'

    import Task from '../tasks/task.svelte'
    import Tasks from '../tasks/tasks.svelte'
    import TaskCreate from '../tasks/task.create.svelte'
    import TaskUpdate from '../tasks/task.update.svelte'
    import TaskDelete from '../tasks/task.delete.svelte'

    import Modal from '../$componentes/modal.svelte'    
    
</script>

<Modal id="TaskCreate">
    <TaskCreate on:created= { TaskStore.modalClose } />
</Modal>

<Modal id="TaskUpdate">
    <TaskUpdate on:updated= { TaskStore.modalClose } />
</Modal>

<Modal id="TaskDelete">
    <TaskDelete on:deleted= { TaskStore.modalClose } />
</Modal>

<Modal id="TaskRead">
    <Task />
</Modal>

<div class="container">
    <br>
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