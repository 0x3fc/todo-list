import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todo: [
            {id: 5, task: 'front end basic structure', done: false},
            {id: 4, task: 'Readme', done: false},
            {id: 3, task: 'Adding Tasks Function', done: false},
            {id: 2, task: 'Set Tasks to done', done: false},
            {id: 1, task: 'HTTP request/response', done: false},
        ]
    },
    getters: {
        getTodo(state) {
            return state.todo;
        }
    },
})
