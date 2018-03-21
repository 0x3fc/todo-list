<template>
    <div>
        <h1>Todo List</h1>
        <CreateTodo />
        <TodoItems />
    </div>
</template>

<script>
import TodoItems from './TodoItems/TodoItems';
import CreateTodo from './CreateTodo';

export default {
    components: {
        TodoItems,
        CreateTodo,
    }
}
</script>

<style>

</style>
