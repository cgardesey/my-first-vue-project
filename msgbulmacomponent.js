Vue.component('message', {
    props: ['title', 'body'],
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{title}}</p>
                <!--<button class="delete" aria-label="delete" @click="hideModal"></button>-->
                <button class="delete" aria-label="delete" @click="isVisible = false">
            </div>
            <div class="message-body">
                {{body}}            
            </div>
        </article>
        `,

    data() {
        return {
            isVisible: true
        };
    },

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root'
});
