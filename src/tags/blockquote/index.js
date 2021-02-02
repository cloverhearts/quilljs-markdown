class Blockquote {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'blockquote'
    this.pattern = options.pattern || /^(>)\s/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => new Promise((resolve) => {
        const match = pattern.exec(text)
        if (!match) {
          resolve(false)
          return
        }
        const originalText = match[0] || ''
        setTimeout(() => {
          this.quillJS.formatText(selection.index, 1, 'blockquote', true)
          this.quillJS.deleteText(
            selection.index - originalText.length,
            originalText.length
          )
          resolve(true)
        }, 0)
      }),
      release: () => {
        setTimeout(() => {
          const contentIndex = this.quillJS.getSelection().index

          const [, length] = this.quillJS.getLine(contentIndex)
          if (length === 0) this.quillJS.format('blockquote', false)
        }, 0)
      }
    }
  }
}

export default Blockquote
