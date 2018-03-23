<template>
  <div id="app">
    <time-sheet title="TIMESHEET RAPORU" :date="currentDate"/>
  </div>
</template>

<script>
import * as moment from "moment"
import TimeSheet from './components/TimeSheet'

export default {
  name: 'App',
  components: {
    TimeSheet
  },
  data() {
    return {
      currentDate: moment().format('DD.MM.YYYY')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
