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
      audio: new Audio(),
      sets: 0,
      work: 0,
      rest: 0,
      run: 'start',
      counter: {}
    }
  },
  computed: {
    workout() {
      let baseWorkout = {
        sets: 6,
        work: 30,
        rest: 30,
      };
      baseWorkout.sets = this.$route.query.sets ? parseInt(this.$route.query.sets) : baseWorkout.sets;
      baseWorkout.work = this.$route.query.work ? parseInt(this.$route.query.work) : baseWorkout.work;
      baseWorkout.rest = this.$route.query.rest ? parseInt(this.$route.query.rest) : baseWorkout.rest;
      return baseWorkout;
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
          self.sets = self.workout.sets;
          self.work = self.workout.work;
          self.rest = self.workout.rest;
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
        this.run = this.sets <= 0 ? 'finished' : this.run;
        this.changeRun();
      }
    },
    changeRun: function() {
      const self = this;
      const toWork = () => {
        self.sets--;
        self.run = 'work';
        self.startTimer();
      };
      let changeRunAction = {
        start: toWork,
        rest: toWork,
        finished: () => { 
          self.run = 'finished';
        },
        work: () => {
          self.run = 'rest';
          self.startTimer();
        }
      }
      changeRunAction[this.run]();
      self.sendSound(self.run);
    },
    sendSound: function(srcSound) {
      this.audio.src = "./sounds/" + srcSound + ".ogg";
		  this.audio.play();
    },
    reset: function() {
      this.sets = this.workout.sets;
      this.work = this.workout.work;
      this.rest = this.workout.rest;
      this.run = 'start';
      clearInterval(this.counter);
    }
  }
}
</script>

<style>
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