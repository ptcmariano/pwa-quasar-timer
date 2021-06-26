<template>
  <q-page class="flex flex-center">
    <div class="panel">

      <div class="flex justify-between">
        <q-toolbar class="bg-blue text-white shadow-2 rounded-borders flex-center">
          <div class="text-h6">Ready?</div>
        </q-toolbar>
        <CardNumberAndTitle title="Sets" :numberActual="sets" :numberTotal="workout.sets" />
        <CardNumberAndTitle title="Work" :numberActual="work" :numberTotal="workout.work" />
        <CardNumberAndTitle title="Rest" :numberActual="rest" :numberTotal="workout.rest" />
      </div>

      <q-card :class="`my-card ${run}`">
        <q-card-section class="flex justify-between">
          <div class="text-h3">Run {{run}}</div>
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
      work: 30,
      rest: 30,
      run: 'start',
      workout: {
        sets: 6,
        work: 30,
        rest: 30,
      },
      counter: {}
    }
  },
  methods: {
    countdown: function() {
      clearInterval(this.counter);
      this.startTimer();
    },
    startTimer: function() {
      let plusSeconds = 0;
      const self = this;
      let timerRunAction = {
        start: () => {
          plusSeconds = 1;
        },
        work: () => {
          plusSeconds = self.workout.work;
        },
        rest: () => {
          plusSeconds = self.workout.rest;
        },
      }
      timerRunAction[this.run]();

      this.counter = setInterval(() => {
        plusSeconds--;
        this[this.run] = plusSeconds;
        this.setStateOverAll(plusSeconds);
      }, 1000);
    },
    setStateOverAll: function(lastTime) {
      if (lastTime <= 0) {
        clearInterval(this.counter);
        if (this.sets >= 1) {
          this.changeRun();
        } else {
          this.run = 'finished';
        }
      }
    },
    changeRun: function() {
      const self = this;
      const toWork = () => {
        self.sets--;
        self.run = 'work';
      };
      let changeRunAction = {
        start: toWork,
        rest: toWork,
        work: () => {
          self.run = 'rest';
        }
      }
      changeRunAction[this.run]();
      this.startTimer();
    },
    reset: function() {
      this.sets = 6;
      this.work = this.workout.work;
      this.rest = this.workout.rest;
      this.run = 'start';
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
.start {
  background-color: aquamarine;
}
.work {
  background-color: lightsalmon;
}
.rest {
  background-color: lightblue;
}
.finished {
  background-color: olivedrab;
}
</style>