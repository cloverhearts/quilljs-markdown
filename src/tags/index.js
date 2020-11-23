import Header from './header'
import Blockquote from './blockquote'
import Bold from './bold'
import InlineCode from './inlinecode'
import Italics from './italics'
import Link from './link'
import Codeblock from './codeblock'
import Strikethrough from './strikethrough'

class TagsOperators {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.quillJS).getAction(),
      new Blockquote(this.quillJS).getAction(),
      new Bold(this.quillJS).getAction(),
      new Link(this.quillJS).getAction(),
      new Codeblock(this.quillJS).getAction(),
      new InlineCode(this.quillJS).getAction(),
      new Strikethrough(this.quillJS).getAction(),
      new Italics(this.quillJS).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }
}

export default TagsOperators
