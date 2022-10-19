import moment from 'moment'
import Vue from 'vue'

export default () => {
  Vue.filter('humanizetime', function (value) {
    let date = moment(value);
    return date.fromNow()
  })
}