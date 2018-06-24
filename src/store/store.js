import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// export to import using later
export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana skin', price: 20},
            { name: 'Shiny star', price: 40},
            { name: 'Green shells', price: 60},
            { name: 'Red shells', price: 80},
          ]
    }
})