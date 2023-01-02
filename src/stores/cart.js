import { defineStore } from "pinia";    

export const useCartStore = defineStore('cart', {

    state: () => {
        return { items: [] }
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