import Header from './header'

class TagsOperators {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.quillJS).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }
}

export default TagsOperators
