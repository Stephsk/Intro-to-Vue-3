app.component('product-button-remove', {
    props: {
        inStockQuantity:{
            type:Number
        },
        
        removeFromCart:{
            type:Function
        }
    },
    template:
        /*html*/
        `
        <button 
        class="button" 
        :class="{ disabledButton: !inStockQuantity }" 
        :disabled="!inStockQuantity" 
        v-on:click="removeFromCart">Remove from Cart</button>
        `

}) 