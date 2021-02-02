import Header from './header'
import Blockquote from './blockquote'
import BlockquoteFulltext from './blockquote/fulltext'
import Bold from './bold'
import CheckBoxChecked from './checkbox/fulltext-checked'
import CheckBoxUnchecked from './checkbox/fulltext-unchecked'
import InlineCode from './inlinecode'
import Italics from './italics'
import Link from './link'
import LinkFullText from './link/fulltext'
import ListOfNumberFulltext from './listn/fulltext'
import ListOfBulletFulltext from './listb/fulltext'
import Codeblock from './codeblock'
import CodeblockFullText from './codeblock/fulltext'
import Strikethrough from './strikethrough'

class TagsOperators {
  constructor (quillJS, tags = {}) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.tags = [
      new Header(this.quillJS, tags.header).getAction(),
      new Blockquote(this.quillJS, tags.blockquote).getAction(),
      new Bold(this.quillJS, tags.bold).getAction(),
      new Link(this.quillJS, tags.link).getAction(),
      new Codeblock(this.quillJS, tags.codeblock).getAction(),
      new InlineCode(this.quillJS, tags.inlinecode).getAction(),
      new Strikethrough(this.quillJS, tags.strikethrough).getAction(),
      new Italics(this.quillJS, tags.italic).getAction()
    ]

    this.fullTextTags = [
      new Header(this.quillJS, tags.header).getAction(),
      new CheckBoxChecked(this.quillJS, tags.checkBoxChecked).getAction(),
      new CheckBoxUnchecked(this.quillJS, tags.checkBoxUnchecked).getAction(),
      new ListOfNumberFulltext(this.quillJS, tags.listOfNumberFulltext).getAction(),
      new ListOfBulletFulltext(this.quillJS, tags.listOfBulletFulltext).getAction(),
      new BlockquoteFulltext(this.quillJS, tags.blockquote).getAction(),
      new CodeblockFullText(this.quillJS, tags.codeblock).getAction(),
      new Bold(this.quillJS, tags.bold).getAction(),
      new LinkFullText(this.quillJS, tags.link).getAction(),
      new InlineCode(this.quillJS, tags.inlinecode).getAction(),
      new Strikethrough(this.quillJS, tags.strikethrough).getAction(),
      new Italics(this.quillJS, tags.italic).getAction()
    ]
  }

  getOperatorsAll () {
    return this.tags
  }

  getFullTextOperatorsAll () {
    return this.fullTextTags
  }
}

export default TagsOperators
