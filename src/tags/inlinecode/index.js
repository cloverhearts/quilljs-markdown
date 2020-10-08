class inlineCode {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'code'
    this.pattern = /(`){1}(.+?)(`){1}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => {
        let match = pattern.exec(text)

        const annotatedText = match[0]
        const matchedText = match[1]
        const startIndex = lineStart + match.index

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          const message = annotatedText.replace(/`/g, '')
          this.quillJS.insertText(startIndex, message, { code: true })
          this.quillJS.insertText(startIndex + message.length, ' ', { code: false })
        }, 0)
      }
    }
  }
}

export default inlineCode
