<template>
  <q-page class="flex flex-center">
    <div class="panel">

      <div class="flex justify-between">
        <q-toolbar class="bg-blue text-white shadow-2 rounded-borders flex-center">
          <div class="text-h6">Ready?</div>
        </q-toolbar>
        <CardNumberAndTitle title="Sets" :number="sets" />
        <CardNumberAndTitle title="Work" :number="work" />
        <CardNumberAndTitle title="Rest" :number="rest" />
      </div>

      <q-card class="my-card">
        <q-card-section class="flex justify-between">
          <div class="text-h3">Run {{run}} {{timer}}</div>
        </q-card-section>
      </q-card>

      <q-card-actions vertical>
        <q-btn flat class="bg-green" @click="countdown">Start</q-btn>
        <q-btn flat class="bg-red" @click="reset">Reset</q-btn>
      </q-card-actions>
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
      sets: 6,
      timer:'0:05',
      work: 20,
      rest: 10,
      run: 'start',
      counter: {}
    }
  },
  methods: {
    countdown: function() {
      clearInterval(this.counter);
      this.startTimer(this.timer);
    },
    startTimer: function(timerCount) {
      let arrTimer = timerCount.split(':');
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
      }, 992);
    },
    calcDistanceTime: function(distance) {
      return {
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
    },
    setStateOverAll: function(lastTime) {
      if (lastTime <= 0) {
        this.timer = '0:00';
        clearInterval(this.counter);
        if (this.sets >= 1) {
          this.changeRun();
        } else {
          this.run = 'finished';
        }
      }
    },
    changeRun: function() {
      if (this.run == 'work') {
        this.run = 'rest';
        this.startTimer(`0:${this.rest}`);
      } else {
        this.sets--;
        this.run = 'work';
        this.startTimer(`0:${this.work}`);
      }
    },
    reset: function() {
      this.sets = 6;
      this.run = 'start';
      this.timer = '0:05';
      clearInterval(this.counter);
    }
  }
}
</script>

<style>
/*
.panel {
  min-width: 850px;
}
*/
</style>