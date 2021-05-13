<template>
  <q-page class="flex flex-center">
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
      <q-separator />
      <q-input filled v-model="timer" mask="time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="timer">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card>
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
export default {
  name: 'Timer',
  data: () => {
    return {
      timer:'0:00',
      counter: {}
    }
  },
  methods: {
    countdown: function() {
      let arrTimer = this.timer.split(':');
      clearInterval(this.counter);
      let timeTo = new Date();
      const plusMinutes = parseInt(arrTimer[0]);
      const plusSeconds = parseInt(arrTimer[1]);
      timeTo.setMinutes(timeTo.getMinutes() + plusMinutes);
      timeTo.setSeconds(timeTo.getSeconds() + plusSeconds);

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
