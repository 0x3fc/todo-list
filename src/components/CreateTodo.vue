<template>
    <v-container fluid grid-list-xl text-xs-cente>
        <v-layout row wrap>
            <v-flex xs8 offset-xs1>
                <v-text-field label="Add Todo" color="teal lighten-1" v-model="task" v-on:keyup.enter="createTodo(task)" />
            </v-flex>
            <v-flex xs1>
                <v-btn flat buttom small color="teal lighten-1" @click="createTodo(task)">Create</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
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
            this.$store.commit('createTodo', task);
            this.$data.task = '';
        }
    }
}
</script>

<style>

</style>
