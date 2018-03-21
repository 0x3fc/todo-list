<template>
    <div>
        <h1>Todo List</h1>
        <div v-for="(item, index) in todo" :key="index">
            {{ item.task }} <input type="checkbox" v-model="item.done"/> <span>item.done: </span> {{ item.done }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters({
        todo: "getTodo",
    })
}
</script>

<style>

</style>
