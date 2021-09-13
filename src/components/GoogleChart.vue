<template>
  <div class="container align">
    <GChart id='chart' type="PieChart" :options="options" :data="data" />
    <v-img id='icon' src='../assets/green.png'/>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
// import { store } from "../store";
let etherkey = process.env.ETHERSCAN_API_KEY;
var info;
export default {
  components: {
    GChart,
  },
  data() {
    return {
      data: {
        results: [],
      },
      options: {    
        height: 500,
        width: 900,
        pieHole: 0.4,
        pieStartAngle: 90,
        colors: ['#71BE45', '333333'],
        enableInteractivity: false,
        fontSize: 25,
      },
    };
  },
  // computed: {
  //   results() {
  //     return store.state.results;
  //   },
  // },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xb2089a7069861c8d90c8da3aacab8e9188c0c531&apikey=`+etherkey
        );
        this.results = await response.json();
        // console.log(this.results)
        info =  parseInt(((this.results.result / 100000000000000000) * 2).toPrecision(4))
        this.fillData(info)       
        console.log(info);
      } catch (error) {
        console.log(error);
      }      
    },
    fillData(info) {
      this.data = {
        cols: [
          { label: "Task", type: "string" },
          { label: "Amount", type: "number" },
        ],
        rows: [
          { c: [{ v: "In Circulation" }, { v: info }] },
          { c: [{ v: "To Be Distributed" }, { v: 100-info }] },
        ],
      };
      console.log(this.data);
    },
  },
  mounted() {
   this.getData()
  //  .then(this.fillData());
    // store.dispatch('getData').then('fillData')
  },
};
</script>
<style>

#icon{
    height: 125px;
    width: 125px;
    position: absolute;
    top: 189px;
    left: 279px;
}
#chart{
position: absolute;
top: 0;
left: 0;
}
.align{
    position: relative;
}

</style>