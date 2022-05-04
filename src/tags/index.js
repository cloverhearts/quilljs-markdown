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
  constructor (quillJS, options = { tags: {} }) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.supportInlineTags = [
      new Header(this.quillJS, options).getAction(),
      new Blockquote(this.quillJS, options).getAction(),
      new Bold(this.quillJS, options).getAction(),
      new Codeblock(this.quillJS, options).getAction(),
      new InlineCode(this.quillJS, options).getAction(),
      new Strikethrough(this.quillJS, options).getAction(),
      new Italics(this.quillJS, options).getAction(),
      new Link(this.quillJS, options).getAction()
    ]

    this.supportfullTextTags = [
      new Header(this.quillJS, options).getAction(),
      new CheckBoxChecked(this.quillJS, options).getAction(),
      new CheckBoxUnchecked(this.quillJS, options).getAction(),
      new ListOfNumberFulltext(this.quillJS, options).getAction(),
      new ListOfBulletFulltext(this.quillJS, options).getAction(),
      new BlockquoteFulltext(this.quillJS, options).getAction(),
      new CodeblockFullText(this.quillJS, options).getAction(),
      new Bold(this.quillJS, options).getAction(),
      new LinkFullText(this.quillJS, options).getAction(),
      new InlineCode(this.quillJS, options).getAction(),
      new Strikethrough(this.quillJS, options).getAction(),
      new Italics(this.quillJS, options).getAction()
    ]

    this.tags = [...this.supportInlineTags]
    this.fullTextTags = [...this.supportfullTextTags]
  }

  getOperatorsAll () {
    return this.tags
  }

  getFullTextOperatorsAll () {
    return this.fullTextTags
  }
}

export default TagsOperators
