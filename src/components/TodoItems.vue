<template>
    <v-container>
        <v-btn flat buttom small color="teal lighten-1" @click="toggleShowDone">{{ this.$data.showFinished ? "Hide" : "Show" }} Done</v-btn>
        <div v-for="undoneTask in undoneTasks" :key="undoneTask.id" @click="markTaskAsFinished(undoneTask)">
            <v-checkbox color="teal lighten-1" :label="undoneTask.name" />
        </div>
        <v-spacer />
        <div v-for="finishedTask in finishedTasks" :key="finishedTask.id" v-if="showFinished" @click="markTaskAsUndone(finishedTask)">
            <v-checkbox color="teal lighten-1" :label="finishedTask.name" input-value="true" />
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
        }
    }
}
</script>

<style>

</style>
