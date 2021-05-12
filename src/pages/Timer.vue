<template>
  <q-page class="flex flex-center">
    <div class="panel">

      <q-card class="my-card">
        <q-toolbar class="bg-blue text-white shadow-2 rounded-borders flex-center">
          <div class="text-h6">Timer</div>
        </q-toolbar>
        <q-card-section>
          <div class="text-h3">{{timer}}</div>
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat class="bg-green" @click="countdown">Start</q-btn>
          <q-btn flat class="bg-red" @click="stop">Stop</q-btn>
        </q-card-actions>
      </q-card>

      <div class="flex justify-between">
        <CardNumberAndTitle title="Cicles" :number="8" />
        <CardNumberAndTitle title="Tabatas" :number="3" />
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        color="secondary"
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import CardNumberAndTitle from 'components/CardNumberAndTitle.vue'
export default {
  components: { CardNumberAndTitle },
  name: 'Timer',
  data: () => {
    return {
      timer:'0:00',
      counter: {}
    }
  },
  methods: {
    countdown: function() {
      this.timer = '1:00';
      let timeTo = new Date();
      timeTo.setMinutes(timeTo.getMinutes() + 1);

      this.counter = setInterval(() => {
        let now = new Date();
        let distance = timeTo.getTime() - now.getTime();
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.timer = `${minutes}:${seconds}`;
      }, 1000)
    },
    stop: function() {
      this.timer = '0:00';
      clearInterval(this.counter);
    }
  }
}
</script>

<style>
.panel {
  min-width: 850px;
}
</style>