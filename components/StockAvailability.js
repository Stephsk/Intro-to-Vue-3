app.component('stock-availability', {
    props: {
        availability: {
            type: Number
        }
    },
    template:
        /*html*/
        `
        <p v-if="availability">In Stock {{availability}} items</p>
        <p v-else>Out of Stock</p>
        `
})