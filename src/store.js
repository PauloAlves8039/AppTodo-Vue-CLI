/**
 * Arquivo responsável pelas configurações de uso do Vuex. 
*/
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const state = { todos: [] }

const actions = {
    addTodo({ commit }, todo){
        return new Promise(resolve => {
            setTimeout(() => {
                todo.id = Date.now()
                commit('addTodo', todo)
                resolve(todo)
            }, 1000)
        })
    }
}

const mutations = {
    addTodo(state, payload){
        state.todos.push(payload)
    }
}

const store = new VueX.Store({state, actions, mutations})

export default store
