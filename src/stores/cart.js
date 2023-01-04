import { defineStore } from "pinia";    

export const useCartStore = defineStore('cart', {
    state: () => {
        return { items: [] }
    },
    getters:{
        totalCartItem: (state) => state.items.reduce((total, i) => total + i.quantity, 0),
        subTotal : (state) => state.items.reduce((total, i) => total + i.item.price * i.quantity, 0),
        taxTotal () {
            return this.subTotal * 0.1;
        },
        total(){
            return this.subTotal + this.taxTotal;
        }
    },
    actions: {
        addToCart(item){
            // console.log(item)
            const exisingItem = this.items.find(i => i.id === item.id);
            console.log(exisingItem)
            if(exisingItem === true){
                exisingItem.item.quantity++;
                return;
            }else{
                this.items.push({item, quantity: 1});
                console.log(this.items)
            }
        },
        removeItemFromCart (item) {
            const index = this.items.findIndex(i => i.id === item.id);
            this.items.splice(index, 1);
        }

    }
})  