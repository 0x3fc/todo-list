<template>
    <div>
        <div v-for="item in todoUndone" :key="item.id">
            {{ item.task }} <input type="checkbox" v-model="item.done"/>
        </div>
        <hr>
        <div v-for="item in todoDone" :key="item.id">
            {{ item.task }} <input type="checkbox" v-model="item.done"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters({
        todoUndone: "getTodoUndone",
        todoDone: "getTodoDone",
    })
}
</script>

<style>

</style>
