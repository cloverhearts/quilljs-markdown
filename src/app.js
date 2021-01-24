import 'core-js/stable'
import 'regenerator-runtime/runtime'
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
      grave: '`',
      tilde: '~',
      underscore: '_'
    }
    this.ignoreTags = ['PRE']
    this.tags = new TagsOperators(this.quillJS)
    this.matches = this.tags.getOperatorsAll()
  }

  onTextChange (delta, oldContents, source) {
    if (source !== 'user') return
    const cursorOffset = (delta.ops[0] && delta.ops[0].retain) || 0
    const inputText = delta.ops[0].insert || (delta.ops[1] && delta.ops[1].insert)

    if (!inputText) return

    if (inputText.length > 1) {
      window._quill = this.quillJS
      const repeatExecuteFullCommand = (textOffset) => new Promise((resolve) => {
        const repeatHandler = setInterval(() => {
          const [line] = this.quillJS.getLine(textOffset)
          if (!line) {
            clearInterval(repeatHandler)
            return 0
          }
          const firstIndex = this.quillJS.getIndex(line)
          if (!this.onFullTextExecute.bind(this)({ index: firstIndex, length: 0 })) {
            clearInterval(repeatHandler)
            const [line] = this.quillJS.getLine(textOffset)
            const firstIndex = this.quillJS.getIndex(line)
            if (!line || !(line.domNode)) { resolve(0) }
            const text = line.domNode.textContent || ''
            resolve(firstIndex + text.length + 1)
          }
        }, 10)
      })

      setTimeout(async () => {
        const cursorOffsetFixed = cursorOffset
        const tokens = inputText.split('\n')
        let _offset = cursorOffsetFixed
        // eslint-disable-next-line no-unused-vars
        for (let v of tokens) {
          _offset = await repeatExecuteFullCommand(_offset)
        }
      }, 0)
      return
    }

    delta.ops.filter(e => e.hasOwnProperty('insert')).forEach(e => {
      switch (e.insert) {
        case this.actionCharacters.whiteSpace:
          this.onInlineExecute.bind(this)()
          break
        case this.actionCharacters.asterisk:
        case this.actionCharacters.rightParenthesis:
        case this.actionCharacters.grave:
        case this.actionCharacters.newLine:
        case this.actionCharacters.tilde:
        case this.actionCharacters.underscore:
          this.onFullTextExecute.bind(this)()
          break
      }
    })

    delta.ops.filter(e => e.hasOwnProperty('delete')).forEach((e) => {
      this.onRemoveElement(e)
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

  onFullTextExecute (virtualSelection) {
    let selection = virtualSelection || this.quillJS.getSelection()
    if (!selection) return
    const [line, offset] = this.quillJS.getLine(selection.index)

    if (!line || offset < 0) return
    const lineStart = selection.index - offset
    const beforeNode = this.quillJS.getLine(lineStart - 1)[0]
    const beforeLineText = beforeNode && beforeNode.domNode.textContent
    const text = line.domNode.textContent + ' '
    selection.length = selection.index++
    if (this.isValid(text, line.domNode.tagName)) {
      // remove block rule.
      if (typeof beforeLineText === 'string' && beforeLineText.length > 0 && text === ' ') {
        const releaseTag = this.matches.find(e => e.name === line.domNode.tagName.toLowerCase())
        if (releaseTag && releaseTag.release) {
          releaseTag.release(selection)
          return
        }
      }

      console.log('check for ', text)
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern)
        console.log('pattern ', match.pattern, text, matchedText)
        if (matchedText) {
          return match.action(text, selection, match.pattern, lineStart)
        }
      }
    }
  }

  onRemoveElement (range) {
    const selection = this.quillJS.getSelection()
    // if removed one item before, editor need to clear item.
    if (range && range.delete === 1) {
      const removeItem = this.quillJS.getLine(selection.index)
      const lineItem = removeItem[0]
      const releaseTag = this.matches.find(e => e.name === lineItem.domNode.tagName.toLowerCase())
      if (releaseTag && releaseTag.release) {
        releaseTag.release(selection)
      }
    }
  }
}

export default MarkdownActivity
