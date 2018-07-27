import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
  name: 'meal',
  components: {},
  props: [],
  data () {
    return {
      meals: null,
    }
  },
  computed: {

  },
  beforeMount(){
    axios
      .get('http://127.0.0.1:8000/api/meals')
      .then(response => (this.meals = response.data))
  },
  mounted () {

  },
  methods: {
  }
}
