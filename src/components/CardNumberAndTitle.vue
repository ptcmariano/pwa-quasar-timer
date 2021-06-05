<template>
  <q-card class="my-card text-center">
    <q-card-section tag="h3" class="text-bold q-my-none">
      {{ number }}
    </q-card-section>

    <q-card-section tag="p" class="q-pa-none">
      {{ title }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CardNumberAndTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>