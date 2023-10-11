app.component('product-image', {
    props: {
        image: {
            type: String
        }
    },
    template:
        /*html*/
        `<div class="product-image">
        <img :src="image">
      </div>`
})

