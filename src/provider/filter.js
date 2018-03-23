import Vue from 'vue';
import * as moment from "moment"

Vue.filter('convertMonthName', function (value) {
    if (!value) return ''
    value = moment(value, 'DD.MM.YYYY').format('MMMM');
    return value
}); 