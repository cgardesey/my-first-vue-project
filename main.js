/*let data = {
            message: 'Hi there'
        };

        new Vue({
            el: '#root',
            data: data
        });*/

var app = new Vue({
    el: '#root',
    data: {
        message: 'Hi there',
        className: 'color-red',
        isLoading: false,
        newName: '',
        title: 'Now the title is being set through JavaScript',
        names: ["John", 'Mary', 'Jane', 'Jack'],
        tasks: [
            {description: 'Go to the store', completed: true},
            {description: 'Finish the screencast', completed: false},
            {description: 'Make donation', completed: false},
            {description: 'Clear inbox', completed: false},
            {description: 'Make dinner', completed: false},
            {description: 'Clean room', completed: true}
        ]
    },

    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = '';
        },
        toggleClass() {
            this.isLoading = true;
        }
    },

    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks() {
            return this.tasks.filter(task => ! task.completed);

            // this.tasks.filter(function (task) {
            //     return ! task.completed;
            // })
        }
    }
});