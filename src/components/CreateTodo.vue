<template>
    <div>
        <input v-model="task" placeholder="Add Todo" v-on:keyup.enter="createTodo(task)" />
        <button @click="createTodo(task)">Create</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        createTodo(task) {
            this.$store.commit('createTodo', task)
        }
    }
}
</script>

<style>

</style>
