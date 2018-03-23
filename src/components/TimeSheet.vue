<template>
    <article class="vue-timesheet-wrapper">
        <header class="vue-timesheet-header">
            <h3> {{ title }} <span class="timesheet-date">{{ date }}</span></h3>
        </header>
        <main class="vue-timesheet-content">
            <h3 class="text-center"> {{ date | convertMonthName }} Ayı İçin Gün Bilgisi</h3>
            <time-sheet-table :selectDate="date" :holidays="holidays" :dayoffs="dayoffs" :projects="projects" :personals="personals"></time-sheet-table>
        </main>
        <footer>
        </footer>
    </article>
</template>

<script>
import * as moment from "moment"
import DayOff from '../assets/mockup/dayoff.json'
import Holiday from '../assets/mockup/holiday.json'
import Project from '../assets/mockup/project.json'
import Personal from '../assets/mockup/personal.json'

import TimeSheetTable from './TimeSheetTable'

export default {
  name: 'TimeSheet',
   components: {
    TimeSheetTable
  },
  props: {
    title: {
      type: String,
      require: true
    },
    date: {
      type: String,
      require: true
    }
  },
  data () {
    return { 
      dayoffs: [],
      holidays: [],
      projects: [],
      personals: [],
    }
  },
  created() {
    this.dayoffs = DayOff
    this.holidays = Holiday
    this.projects = Project
    this.personals = Personal
  }
}
</script>
