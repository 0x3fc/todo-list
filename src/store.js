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
        getTodoUndone(state) {
            return state.todo.filter(todo => !todo.done);
        },
        getTodoDone(state) {
            return state.todo.filter(todo => todo.done);
        }
    },
    mutations: {
        createTodo(state, task) {
            const latestId = Math.max.apply(Math, state.todo.map(function(todo) {return todo.id}));
            const todo = {
                id: latestId + 1,
                task: task,
                done: false,
            };
            state.todo.splice(0, 0, todo);
        }
    },
})

export default store;
