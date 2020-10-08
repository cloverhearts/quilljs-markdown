import TagsOperators from './tags'

class MarkdownActivity {
  constructor (quillJS, options) {
    this.quillJS = quillJS
    this.options = options
    this.quillJS.on('text-change', this.onTextChange.bind(this))
    this.actionCharacters = {
      whiteSpace: ' ',
      newLine: '\n',
      asterisk: '*',
      rightParenthesis: ')',
      grave: '`'
    }
    this.ignoreTags = ['PRE']
    this.tags = new TagsOperators(this.quillJS)
    this.matches = this.tags.getOperatorsAll()
  }

  onTextChange (delta, oldContents, source) {
    delta.ops.filter(e => e.hasOwnProperty('insert')).forEach(e => {
      switch (e.insert) {
        case this.actionCharacters.whiteSpace:
          this.onInlineExecute.bind(this)()
          break
        case this.actionCharacters.asterisk:
        case this.actionCharacters.rightParenthesis:
        case this.actionCharacters.grave:
        case this.actionCharacters.newLine:
          this.onFullTextExecute.bind(this)()
          break
      }
    })
  }

  isValid (text, tagName) {
    return (
      typeof text !== 'undefined' &&
      text &&
      !this.ignoreTags.find(e => e === tagName)
    )
  }

  onInlineExecute () {
    const selection = this.quillJS.getSelection()
    if (!selection) return
    const [line, offset] = this.quillJS.getLine(selection.index)
    const text = line.domNode.textContent
    const lineStart = selection.index - offset
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern)
        if (matchedText) {
          match.action(text, selection, match.pattern, lineStart)
          return
        }
      }
    }
  }

  onFullTextExecute () {
    let selection = this.quillJS.getSelection()
    if (!selection) return
    const [line, offset] = this.quillJS.getLine(selection.index)
    const lineStart = selection.index - offset
    const beforeNode = this.quillJS.getLine(lineStart - 1)[0]
    const beforeLineText = beforeNode && beforeNode.domNode.textContent
    const text = line.domNode.textContent + ' '
    selection.length = selection.index++
    if (this.isValid(text, line.domNode.tagName)) {
      if (typeof beforeLineText === 'string' && beforeLineText.length > 0 && text === ' ') {
        const releaseTag = this.matches.find(e => e.name === line.domNode.tagName.toLowerCase())
        if (releaseTag && releaseTag.release) {
          releaseTag.release(selection)
          return
        }
      }

      for (let match of this.matches) {
        const matchedText = text.match(match.pattern)
        if (matchedText) {
          match.action(text, selection, match.pattern, lineStart)
          return
        }
      }
    }
  }
}

export default MarkdownActivity
