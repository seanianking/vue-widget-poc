<template>
  <div class="home">
    <GoogleChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleChart from '@/components/GoogleChart.vue'

export default {
  name: 'GoogleChart',
  components: {
    GoogleChart
  }
}
</script>
