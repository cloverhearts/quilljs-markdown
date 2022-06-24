import Header from './header/index.js'
import Blockquote from './blockquote/index.js'
import BlockquoteFulltext from './blockquote/fulltext.js'
import Bold from './bold/index.js'
import CheckBoxChecked from './checkbox/fulltext-checked.js'
import CheckBoxUnchecked from './checkbox/fulltext-unchecked.js'
import InlineCode from './inlinecode/index.js'
import Italics from './italics/index.js'
import Link from './link/index.js'
import LinkFullText from './link/fulltext.js'
import ListOfNumberFulltext from './listn/fulltext.js'
import ListOfBulletFulltext from './listb/fulltext.js'
import Codeblock from './codeblock/index.js'
import CodeblockFullText from './codeblock/fulltext.js'
import Strikethrough from './strikethrough/index.js'

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
