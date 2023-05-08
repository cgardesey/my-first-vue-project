
Vue.component('coupon', {
    template: `
        <input placeholder="enter your coupon code." @blur="onCouponApplied">      
        `,

    data() {
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to the email', complete: false},
                {task: 'Go to the farm', complete: true},
                {task: 'Go to the work', complete: false}
            ]
        };
    },

    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }
});

Vue.component('task', {
    template: '<li><slot></li>'
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});


