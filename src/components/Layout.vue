<template>
    <v-container fluid grid-list-xl text-xs-cente>
        <div class="headline"><span class="teal--text">Todo List</span></div>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card contain color="teal lighten-4">
                    <CreateTodo />
                </v-card>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <v-card contain color="teal lighten-4">
                    <TodoItems />
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import TodoItems from './TodoItems';
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
