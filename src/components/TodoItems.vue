<template>
    <div>
        <div v-for="item in todoUndone" :key="item.id">
            {{ item.task }} <input type="checkbox" v-model="item.done"/>
        </div>
        <hr>
        <button @click="toggleShowDone">{{this.$data.show? "Hide" : "Show"}} Done</button>
        <div v-for="item in todoDone" :key="item.id" v-if="show">
            {{ item.task }} <input type="checkbox" v-model="item.done"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            show: false,
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
