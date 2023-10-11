app.component('product-variant-list', {
    props: {
        list: {
            type: Array
        },
        onMouseOver:{
            type: Function,
            default: ()=>{}
        },
        onClick:{
            type: Function,
            
        }
    },
    template:
        /*html*/
        ` 
        <div 
              v-for="(variant, index) in list" 
              :key="variant.id" 
              @mouseover="onMouseOver(index)" 
              @click="onClick(index)"
              class="color-circle" 
              :style="{ backgroundColor: variant.color }">
            </div>`,
    
})