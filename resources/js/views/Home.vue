<template>
  <div>
    <sections />

    <div class="pb-10 pt-3">
      <v-row class="d-flex justify-center mt-5">
        <h1>Latest Items</h1>
      </v-row>
      <v-row class="d-flex justify-center mb-2">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-row>
     <!-- <v-lazy
        v-model="isActive"
        :options="{
          threshold: .1
        }"
        transition="fade-transition"
      >
      <carousel
        :perPage="1"
        :scrollPerPage="false"
        :mouse-drag="true"
        :touchDrag="true"
        :navigationEnabled="true"
        :navigation-next-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>`'
        :navigation-prev-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>`'
        :autoplay="false"
        :paginationEnabled="false"
        :autoplayHoverPause="true"
        :perPageCustom="[[360, 1], [640, 3], [1024, 4]]"
      >
        <slide v-for="product in products" :key="product.slug">
          <Product :product="product" />
        </slide>
      </carousel>
     </v-lazy> -->

        <v-row class="wrap px-3">
          <v-col cols="6" sm="4" md="3" lg="3" xl="3" class="prod" v-for="(i, index) in products" :key="index">
            <Product :product="i" />
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <!-- <v-btn color="secondary" fab x-small light class="mx-2" @click="fetchProduct(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn> -->
            <v-btn color="secondary" rounded light  class="mx-2" @click="fetchProduct(pagination.next_page_url)" :disabled="!pagination.next_page_url">
              More Items
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
        </v-row>
    </div>

    <div class="vld-parent">
        <loading
        :active.sync="isLoading"
        loader="dots"
        :opacity="opacity"
        color='#6200E'
        ></loading>
    </div>

  </div>
</template>

<script>
import Sections from '../components/home/Sections.vue'
import Product from '../components/products/Product'
import { mapGetters, mapActions } from 'vuex'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  components: {
    Sections,
    Product,
    Loading
  },

  data: () => {
      return {
        products: [],
        isLoading: false,
        fullPage: false,
        opacity: 0.99,
        isActive: false,
        pagination: {},
        page: 1,
      }
  },

//   computed: {
//     ...mapGetters({
//       products: 'home/home_products'
//     }),
//   },

  created() {
      //  this.getHomeProducts()
        this.loadingStart()
    },

  mounted() {
      this.loadingEnd()

      this.fetchProduct()
  },

    methods: {
        // ...mapActions({
        //     getHomeProducts: 'home/getHomeProducts'
        // }),

        loadingStart() {
        this.isLoading = true;
        },
        loadingEnd() {
            setTimeout(() => {
                this.isLoading = false
            },1000)
        },

        fetchProduct(pagei) {
            pagei = pagei || '/api/products/get-home-products';
        axios
            .get(pagei)
            .then(res => {
          //  this.isLoading = false;
            //   this.products = res.data.data;
            this.products.push(...res.data.data);
            this.pagination = {
                path: res.data.meta.path+"?page=",
                prev_page_url: res.data.links.prev,
                next_page_url: res.data.links.next,
                current_page : res.data.meta.current_page,
                first_page_url: res.data.links.first,
                last_page_url: res.data.links.last,
            }

            })
            .catch(err => {
            console.log();
            });
        },

    }

}
</script>

<style >
.VueCarousel-navigation-prev {
  left: 10% !important;
}
.VueCarousel-navigation-next {
  right: 10% !important;
}

.chev-next {
  height: 40px;
  width: 40px;
}

.chev-prev {
  height: 40px;
  width: 40px;
}

.prod {
    padding-right: 0 !important;
    padding-left: 0 !important;
}
</style>
