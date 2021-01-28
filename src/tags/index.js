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

    this.fullTextTags = [
      new Header(this.quillJS).getAction(),
      new CheckBoxChecked(this.quillJS).getAction(),
      new CheckBoxUnchecked(this.quillJS).getAction(),
      new ListOfNumberFulltext(this.quillJS).getAction(),
      new ListOfBulletFulltext(this.quillJS).getAction(),
      new BlockquoteFulltext(this.quillJS).getAction(),
      new CodeblockFullText(this.quillJS).getAction(),
      new Bold(this.quillJS).getAction(),
      new LinkFullText(this.quillJS).getAction(),
      new InlineCode(this.quillJS).getAction(),
      new Strikethrough(this.quillJS).getAction(),
      new Italics(this.quillJS).getAction()
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
