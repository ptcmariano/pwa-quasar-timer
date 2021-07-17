<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input filled stack-label label="sets" name="sets" id="sets" 
        type="number" v-model="sets" bg-color="light-green" />
      <q-input filled stack-label label="work" name="work" id="work" 
        type="number" v-model="work" bg-color="light-blue" />
      <q-input filled stack-label label="rest" name="rest" id="rest" 
        type="number" v-model="rest" bg-color="yellow" />
      <q-btn color="deep-orange" @click="goWorkout">
        <q-icon size="xl" name="play_circle_outline"></q-icon>
        <h3>Go!</h3>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goWorkout() {
      this.$router.push(`timer?sets=${this.sets}&work=${this.work}&rest=${this.rest}`);
    }
  },
  data: () => {
    return {
      sets: 6,
      work: 30,
      rest: 30
    }
  }
}
</script>
