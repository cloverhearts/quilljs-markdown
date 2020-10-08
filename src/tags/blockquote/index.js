class Blockquote {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'blockquote'
    this.pattern = /^(>)\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => {
        const match = pattern.exec(text)
        if (!match) { return }
        const originalText = match[0] || ''
        setTimeout(() => {
          this.quillJS.formatText(selection.index, 1, 'blockquote', true)
          this.quillJS.deleteText(selection.index - originalText.length, originalText.length)
        }, 0)
      },
      release: () => {
        setTimeout(() => {
          this.quillJS.format('blockquote', false)
          const contentIndex = this.quillJS.getSelection().index
          const beforeLine = this.quillJS.getLine(contentIndex - 1)[0]
          if (beforeLine.domNode.textContent === '') {
            beforeLine.format('blockquote', false)
          }
        }, 0)
      }
    }
  }
}

export default Blockquote
