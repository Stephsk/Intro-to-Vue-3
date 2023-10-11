app.component('product-display',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <product-image :image="image"></product-image>
          <div class="product-info">
           <product-title :title="title"></product-title>
            <stock-availability :availability="inStock"/>
            <shipping-info :shipping="shipping"/>
            <product-details :details="details"/>
            <product-variant-list :list="variants" :onClick="updateVariant"/>
            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>`,
      data() {
        return {
             product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '20% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        }
    }
})