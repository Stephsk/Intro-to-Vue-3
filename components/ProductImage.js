app.component("product-image", {
  props: {
    path: {
      type: String,
    },
  },
  template:
    /*html*/
    `<div class="product-image">
        <img :src="path">
      </div>`,
});
