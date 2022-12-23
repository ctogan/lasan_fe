import moment from 'moment'
import Vue from 'vue'

export default () => {
  Vue.filter('humanizetime', function (value) {
    let date = moment(value);
    return date.fromNow()
  });
  Vue.directive('click-outside', {
    bind(el, binding, vnode) {
      var vm = vnode.context;
      var callback = binding.value;

      el.clickOutsideEvent = function (event) {
        if (!(el === event.target || el.contains(event.target))) {
          return callback.call(vm, event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  });
}
