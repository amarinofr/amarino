import Component from 'classes/Component'

export default class AsyncLoad extends Component {
  constructor ({ element }) {
    super({ element })

    // this.createObserver()
    this.element.src = this.element.getAttribute('data-src')
  }

  // createObserver () {
  //   this.observer = new window.IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //       }
  //     })
  //   })

  //   this.observer.observe(this.element)
  // }
}
