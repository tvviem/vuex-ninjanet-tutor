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
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price/2
                }
            })
            return saleProducts;
        }
    }
})