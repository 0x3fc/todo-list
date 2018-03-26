import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        undoneTasks: [
            {id: 5, name: 'front end basic structure'},
            {id: 4, name: 'Readme'},
            {id: 3, name: 'Adding Tasks Function'},
            {id: 2, name: 'Set Tasks to done'},
            {id: 1, name: 'HTTP request/response'},
        ],
        finishedTasks: [],
    },
    getters: {
        getUndoneTasks(state) {
            return state.undoneTasks;
        },
        getFinishedTasks(state) {
            return state.finishedTasks;
        }
    },
    mutations: {
        createTask(state, name) {
            const latestId = Math.max.apply(Math, state.undoneTasks.map(task => task.id), state.finishedTasks.map(task => task.id));
            const task = {
                id: latestId + 1,
                name: name,
            };
            state.undoneTasks.unshift(task);
        },
        markTaskAsFinished(state, undoneTask) {
            const index = state.undoneTasks.indexOf(undoneTask);
            state.undoneTasks.splice(index, 1);
            state.finishedTasks.unshift(undoneTask);
        },
        markTaskAsUndone(state, finishedTask) {
            const index = state.finishedTasks.indexOf(finishedTask);
            state.finishedTasks.splice(index, 1);
            state.undoneTasks.push(finishedTask);
        },
        editTaskName(state, payload) {
            // state.undoneTasks[payload.index].name = payload.newTaskName;
            let index = state.undoneTasks.map(task => task.id).indexOf(payload.taskId);
            if (index >= 0) {
                state.undoneTasks[index].name = payload.newTaskName;
            }

            index = state.finishedTasks.map(task => task.id).indexOf(payload.taskId);
            if (index >= 0) {
                state.finishedTasks[index].name = payload.newTaskName;
            }
        }
    },
})

export default store;
