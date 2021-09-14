<template>
  <div class="home">
    <NormalTransactions/>
  </div>
</template>

<script>
// @ is an alias to /src
import NormalTransactions from '@/components/NormalTransactions.vue'

export default {
  name: 'NormalTransactions',
  components: {
    NormalTransactions
  }
}
</script>
