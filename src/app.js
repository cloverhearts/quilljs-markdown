import TagsOperators from './tags'

class MarkdownActivity {
  constructor (quillJS, options) {
    this.quillJS = quillJS
    this.options = options
    this.quillJS.on('text-change', this.onTextChange.bind(this))
    this.actionCharacters = {
      whiteSpace: ' ',
      newLine: '\n'
    }
    this.ignoreTags = ['PRE']
    this.tags = new TagsOperators(this.quillJS)
    this.matches = this.tags.getOperatorsAll()
  }

  onTextChange (delta, oldContents, source) {
    delta.ops.filter(e => e.hasOwnProperty('insert')).forEach(e => {
      switch (e.insert) {
        case this.actionCharacters.whiteSpace:
          this.onQuery.bind(this)()
          break
        case this.actionCharacters.newLine:
          this.onExecute.bind(this)()
          break
      }
    })
  }

  isValid (text, tagName) {
    return (
      typeof text !== 'undefined' &&
      text &&
      this.ignoreTags.indexOf(tagName) === -1
    )
  }

  onQuery () {
    const selection = this.quillJS.getSelection()
    console.log('run query', this.quillJS, selection)
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

  onExecute () {
    console.log('run execute', this.quillJS)
    let selection = this.quillJS.getSelection()
    if (!selection) return
    const [line, offset] = this.quillJS.getLine(selection.index)
    const text = line.domNode.textContent + ' '
    const lineStart = selection.index - offset
    selection.length = selection.index++
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
}

export default MarkdownActivity
