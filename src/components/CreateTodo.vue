<template>
    <div>
        <v-container fluid grid-list-xl text-xs-cente>
            <v-layout row wrap>
                <v-flex xs8 offset-xs1>
                    <v-text-field label="Add Todo" color="teal lighten-1" v-model="newTaskName" v-on:keyup.enter="createTask(newTaskName)" />
                </v-flex>
                <v-flex xs1>
                    <v-btn flat buttom small color="teal lighten-1" @click="createTask(newTaskName)">Create</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-snackbar bottom right v-model="showSnackbar">
            {{ snackbarMessage }}
            <v-btn flat color="teal lighten-1" @click.native="showSnackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
const EMPTY_MESSAGE = 'Task name cannot be empty.';
const MAX_LENGTH = 30;
const EXCESS_LENGTH_MESSAGE = 'Task name cannot excess 30 characters.';
const CREATED_MESSAGE_APPENDANT = ' is created.';

export default {
    data() {
        return {
            newTaskName: '',
            showSnackbar: false,
            snackbarMessage: '',
        }
    },
    methods: {
        createTask(newTaskName) {
            /* Simple validation */
            if (newTaskName.length <= 0) {
                this.showSnackbarMessage(EMPTY_MESSAGE);
            } else if (newTaskName.length > MAX_LENGTH) {
                this.showSnackbarMessage(EXCESS_LENGTH_MESSAGE);
            } else {
                this.$store.commit('createTask', newTaskName);
                this.showSnackbarMessage(newTaskName + CREATED_MESSAGE_APPENDANT);
                this.newTaskName = '';
            }
        },
        showSnackbarMessage(message) {
            this.snackbarMessage = message;
            this.showSnackbar = true;
        }
    }
}
</script>

<style>

</style>
