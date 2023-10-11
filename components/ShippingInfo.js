app.component('shipping-info', {
    props: {
        shipping: {
            type: String
        }
    },
    template:
        /*html*/
        ` <p> Shipping: {{shipping}} </p>`
})