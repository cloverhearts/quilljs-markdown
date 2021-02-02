class inlineCode {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'code'
    this.pattern = options.pattern || /(`){1}(.+?)(`){1}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => new Promise((resolve) => {
        let match = pattern.exec(text)

        if (!match) {
          resolve(false)
          return
        }

        const [annotatedText] = match
        const startIndex = lineStart + match.index
        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          setTimeout(() => {
            const message = annotatedText.replace(/`/g, '')
            this.quillJS.insertText(startIndex, message, { code: true })
            this.quillJS.insertText(startIndex + message.length, '', { code: false })
            resolve(true)
          }, 0)
        }, 0)
      })
    }
  }
}

export default inlineCode
