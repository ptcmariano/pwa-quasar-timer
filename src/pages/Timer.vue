<template>
  <q-page class="flex flex-center">
    <div class="panel">

      <q-card class="my-card">
        <q-toolbar class="bg-blue text-white shadow-2 rounded-borders flex-center">
          <div class="text-h6">Timer</div>
        </q-toolbar>
        <q-card-section class="flex justify-between">
          <div class="text-h3">{{timer}}</div>
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat class="bg-green" @click="countdown">Start</q-btn>
          <q-btn flat class="bg-red" @click="stop">Stop</q-btn>
        </q-card-actions>
      </q-card>

      <div class="flex justify-between">
        <CardNumberAndTitle title="Sets" :number="sets" />
        <CardNumberAndTitle title="Work" :number="work" />
        <CardNumberAndTitle title="Rest" :number="rest" />
      </div>

      <q-separator />
      <q-input filled v-model="timer" type="time" hint="Native time">
      </q-input>
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
      sets: 2,
      timer:'0:10',
      work:'0:10',
      rest:'0:10',
      counter: {}
    }
  },
  methods: {
    countdown: function() {
      clearInterval(this.counter);
      let arrTimer = this.timer.split(':');
      let timeTo = new Date();
      const plusMinutes = parseInt(arrTimer[0]);
      const plusSeconds = parseInt(arrTimer[1]);
      timeTo.setMinutes(timeTo.getMinutes() + plusMinutes);
      timeTo.setSeconds(timeTo.getSeconds() + plusSeconds);

      this.counter = setInterval(() => {
        let now = new Date();
        let distance = timeTo.getTime() - now.getTime();
        const {minutes, seconds} = this.calcDistanceTime(distance);
        this.timer = `${minutes}:${seconds}`;
        this.setStateOverAll(minutes+seconds);
      }, 990)
    },
    calcDistanceTime: function(distance) {
      return {
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
    },
    setStateOverAll: function(lastTime) {
      if (lastTime <= 0) {
        this.stop();
        if (this.sets >= 1) {
          this.sets--;
          this.timer = this.rest;
          this.countdown();
        }
      }
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