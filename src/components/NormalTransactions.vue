<template>
  <div>
      <i class="far fa-5x fa-lightbulb"></i>
      <p style="font-size: 30px; font-weight: bold">
        {{ results[0].transfers_count }} Energy Transfers
      </p>
  </div>
</template>

<script>
// let etherkey = process.env.ETHERSCAN_API_KEY;
// var info;
export default {
  name: "NormalTransactions",

  data() {
    return {
      results: [],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch(
          `https://api.bloxy.info/token/token_stat?token=0xb2089a7069861c8d90c8da3aacab8e9188c0c531&key=ACChTwr9Y0PX0&format=structure`
        );
        this.results = await response.json();
        console.log(this.results);
        console.log(this.results[0].transfers_count + " transfers count");
        console.log(this.results[0].holders_count + " holders count");
        console.log(this.results[0].circulating_supply + " circulating supply");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
