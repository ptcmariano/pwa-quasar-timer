<template>
  <q-page class="flex flex-center">
    <q-toolbar class="bg-blue text-white shadow-2 rounded-borders flex-center">
      <div class="text-h6">Timer</div>
    </q-toolbar>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h3">{{timer}}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat class="bg-green">Start</q-btn>
        <q-btn flat class="bg-red">Stop</q-btn>
      </q-card-actions>
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
      timer:'02:00'
    }
  }
}
</script>
