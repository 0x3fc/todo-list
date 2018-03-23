<template>
    <div>
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
        <v-snackbar bottom right v-model="snackbar">
            {{ snackbarMsg }}
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: '',
            snackbar: false,
            snackbarMsg: '',
        }
    },
    methods: {
        createTodo(task) {
            /* Simple validation */
            if (task.length <= 0) {
                this.$data.snackbarMsg = 'Task name cannot be empty.';
                this.$data.snackbar = true;
            } else if (task.length > 30) {
                this.$data.snackbarMsg = 'Task name cannot excess 30 characters.';
                this.$data.snackbar = true;
            } else {
                this.$store.commit('createTodo', task);
                this.$data.task = '';
                this.$data.snackbarMsg = task + ' is created!';
                this.$data.snackbar = true;
            }
        }
    }
}
</script>

<style>

</style>
