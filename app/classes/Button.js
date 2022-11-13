import Component from 'classes/Component'

export default class Button extends Component {
  constructor ({ element }) {
    super({ element })
  }

  addEventListeners () {
    this.element.addEventListener('click', console.log('clicked'))
  }

  removeEventListeners () {

  }
}
