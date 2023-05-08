Vue.component('modal', {
    template: `
        <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <slot>
        <!--Default content here.-->
      </slot>
    </section>
    <footer class="modal-card-foot">
        <a class="button is-primary">Okay</a>
      <slot name="footer"></slot>
    </footer>
  </div>
</div>
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
    }
});

Vue.component('task', {
    template: '<li><slot></li>'
});

new Vue({
    el: '#root'
});
