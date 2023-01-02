import { defineStore } from "pinia";    

export const useCartStore = defineStore('cart', {

    state: () => {
        return { items: [] }
    },
    getters:{
        totalCartItem: (state) => state.items.reduce((total, i) => total + i.quantity, 0)
    },
    actions: {
        addToCart(item){
            // console.log(item)
            const exisingItem = this.items.find(i => i.id === item.id);
            if(exisingItem){
                exisingItem.quantity++;
            }else{
                this.items.push({item, quantity: 1});
                console.log(this.items)
            }
        }
    }
})  