export class Component {
  constructor(id) {
    this.$el = document.getElementById(id)
    this.init()
  }

  init() {}

  hide() {
    this.$el.classList.add('hide')
    if (document.querySelector('.hide-section')) {
      document.querySelector('.hide-section').classList.remove('hide-section')
    }
  }
  show() {
    this.$el.classList.remove('hide')
  }
}
