app.component('product-title', {
    props: {
        title: {
            type: String
        }
    },
    template:
        /*html*/
        ` 
        <h1>{{ title }}</h1>`

})