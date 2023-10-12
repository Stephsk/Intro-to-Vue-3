app.component('product-button-add', {
    props: {
        inStockQuantity:{
            type:Number
        },
        addToCart:{
            type:Function
        },
       
    },
    template:
        /*html*/
        `
     
        <button 
        class="button" 
        :class="{ disabledButton: !inStockQuantity }" 
        :disabled="!inStockQuantity" 
        v-on:click="addToCart">Add to Cart</button>
        `

}) 