app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <product-image :path="image"/>
          <div class="product-info">
           <product-title :title="title"/>
            <stock-availability :availability="inStockQuantity"/>
            <product-button-remove :inStockQuantity="inStockQuantity" :removeFromCart= "removeFromCart" />
            <shipping-info :shipping="shipping"/>
            <product-details :details="details"/>
            <product-variant-list :list="variants" :onClick="updateVariant"/>
            <product-button-add :inStockQuantity="inStockQuantity" :addToCart="addToCart"/>
            
          </div>
        </div>
      </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "20% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} + ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStockQuantity() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
