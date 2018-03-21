import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todo: [
            {task: 'front end basic structure', done: false},
            {task: 'Readme', done: false},
            {task: 'Adding Tasks Function', done: false},
            {task: 'Set Tasks to done', done: false},
            {task: 'HTTP request/response', done: false},
        ]
    },
    getters: {
        getTodo(state) {
            return state.todo;
        }
    },
})
