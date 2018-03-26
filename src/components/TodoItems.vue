<template>
    <v-container>
        <v-btn flat buttom small color="teal lighten-1" @click="toggleShowDone">{{ this.$data.showFinished ? "Hide" : "Show" }} Done</v-btn>
        <div v-for="undoneTask in undoneTasks" :key="undoneTask.id">
            <v-layout align-center>
                <v-checkbox class="shrink mt-1 mb-1 mr-3 ml-3" color="teal lighten-1" hide-details @click="markTaskAsFinished(undoneTask)" />
                <v-text-field :value="undoneTask.name" color="teal lighten-1" v-on:keyup.enter="editTaskName($event, undoneTask.id)"></v-text-field>
            </v-layout>
        </div>
        <v-spacer />
        <div v-for="finishedTask in finishedTasks" :key="finishedTask.id" v-if="showFinished">
            <v-layout align-center>
                <v-checkbox class="shrink mt-1 mb-1 mr-3 ml-3" color="teal lighten-1" hide-details @click="markTaskAsUndone(finishedTask)" input-value="true" />
                <v-text-field :value="finishedTask.name" color="teal lighten-1" v-on:keyup.enter="editTaskName($event, finishedTask.id)"></v-text-field>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            showFinished: true,
        }
    },
    computed: mapGetters({
        undoneTasks: 'getUndoneTasks',
        finishedTasks: 'getFinishedTasks',
    }),
    methods: {
        toggleShowDone() {
            this.showFinished = !this.showFinished;
        },
        markTaskAsFinished(undoneTask) {
            this.$store.commit('markTaskAsFinished', undoneTask);
        },
        markTaskAsUndone(finishedTask) {
            this.$store.commit('markTaskAsUndone', finishedTask);
        },
        editTaskName(event, taskId) {
            this.$store.commit('editTaskName', {
                taskId: taskId,
                newTaskName: event.target.value,
            });
        }
    }
}
</script>

<style>

</style>
