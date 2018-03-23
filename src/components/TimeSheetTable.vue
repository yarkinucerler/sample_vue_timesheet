<template>
   <form>
       <table class="vue-timesheet-table fixed">
            <thead class="vue-timesheet-table-header">
                <tr>
                    <th colspan="4"></th>
                    <th v-for="(day, index) in daysOfCurrentMonth" :key="index + 1"  :data-status="(index + 1) | weekendFilter(selectDate, holidays, dayoffs)">
                        <span>{{ index + 1 }}</span>
                    </th>
                </tr>
                <tr style="height: 20px;"></tr>
            </thead>
            <tbody class="vue-timesheet-table-content">
                <tr v-for="(personal, index) in personals" :key="index">
                    <td colspan="4">
                        <span>
                        <select class="select-2">
                            <option disabled>Proje Seçiniz</option>
                            <option v-for="(project, i) in projects" :key="i" :selected="project.name === personal.projectName">{{ project.name }}</option>
                        </select>
                        </span>
                    </td>
                    <td v-for="(hour, index) in personal.projectHours" :key="index" class="text-center">
                        <span>
                            <input type="number" :value="hour.hour" max="12" min="0">
                        </span>
                    </td>
               </tr>
            </tbody>
        </table>
        <button type="button" class="btn-add">+ Yeni Proje Ekle</button>
   </form>
</template>

<script>
import * as moment from "moment"

export default {
  name: 'TimeSheetTable',
  props: {
    selectDate: String,  
    dayoffs: Array,
    holidays: Array,
    projects: Array,
    personals: Array,
  },
  computed: {
   
  },
  data () {
    return { 
        daysOfCurrentMonth: []
    }
  },
  filters: {
    weekendFilter: function (value, selectDate, holidayList, dayoffsList) {
        if (!value) return '';
        const date = convertDateObjectOfCurrentDate(selectDate);     
        const currentDate = (value.toString().length === 1 ? '0' + value : value) + '.' +  ((date.month + 1).toString().length === 1 ? '0' + (date.month + 1) : (date.month + 1)) + '.' + date.year;
        
        for(let item of holidayList) {
            for( let i of item.rowDate) {
                if(currentDate === i) {
                    return 'holiday'
                }
            }
        };

        for(let item of holidayList) {
            for( let i of item.rowDate) {
                if(currentDate === i) {
                    return 'holiday'
                }
            }
        };

        if(moment().year(date.year).month(date.month).date(value).format('dddd').toLowerCase() === 'saturday' || moment().year(date.year).month(date.month).date(value).format('dddd').toLowerCase() === 'sunday')
            return 'weekend';
        else  if(moment().year(date.year).month(date.month).date(value).format('dddd').toLowerCase() === 'cumartesi' || moment().year(date.year).month(date.month).date(value).format('dddd').toLowerCase() === 'pazar')
            return 'weekend';
        else
            return 'day-week';
    }
  },
  createdBefore() {
    if(this.personals.length === 0) {
        console.log('...CreatedBefore')
    }
  },
  created() {
      this.daysOfCurrentMonth = createTableHeader(this.selectDate);
  },
  beforeMount() {
      if(this.personals.length === 0) {
          console.log('...BeforeMount')
          
      }
  },
  mount() {
      if(this.personals.length === 0) {
          console.log('...Mount')
      }
  }
}




function createTableHeader(params) {
    const date = convertDateObjectOfCurrentDate(params);
    const daysOfMonth = moment(date.year + "-" + (date.month + 1)).daysInMonth();
    
    return new Array(daysOfMonth).fill('');
}

function convertDateObjectOfCurrentDate(params) {
    const year = moment(params, 'DD.MM.YYYY').get('year');
    const month = moment(params, 'DD.MM.YYYY').get('month');
    const day = moment(params, 'DD.MM.YYYY').get('date');

    return { day: day, month: month, year: year }
}

</script>
