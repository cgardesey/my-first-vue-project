// window.Event = new Vue();
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

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
            // Event.$emit('applied');
            Event.fire('applied');
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

   created() {
        // Event.$on('applied', () => alert('Handling it!'));
        Event.listen('applied', () => alert('Handling it!'));
   }
});


