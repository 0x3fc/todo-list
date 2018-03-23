<template>
    <v-container>
        <v-btn flat buttom small color="teal lighten-1" @click="toggleShowDone">{{ this.$data.show ? "Hide" : "Show" }} Done</v-btn>
        <div v-for="item in todoUndone" :key="item.id">
            <v-checkbox color="teal lighten-1" :label="item.task" v-model="item.done" />
        </div>
        <v-spacer />
        <div v-for="item in todoDone" :key="item.id" v-if="show">
            <v-checkbox color="teal lighten-1" :label="item.task" v-model="item.done" />
        </div>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            show: true,
        }
    },
    computed: mapGetters({
        todoUndone: "getTodoUndone",
        todoDone: "getTodoDone",
    }),
    methods: {
        toggleShowDone() {
            return this.$data.show = !this.$data.show;
        }
    }
}
</script>

<style>

</style>
