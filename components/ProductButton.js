app.component('product-button', {
    props: {
        inStockQuantity:{
            type:Number
        },
        addToCart:{
            type:Function
        },
        text:{
            type:String
        }
       
    },
    template:
        /*html*/
        `
     
        <button 
        class="button" 
        :class="{ disabledButton: !inStockQuantity }" 
        :disabled="!inStockQuantity" 
        v-on:click="addToCart">{{text}}</button>
        `

}) 