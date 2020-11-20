class Bold {
  constructor (quillJS) {
    this.quillJS = quillJS
    this.name = 'italic'
    this.pattern = /(\*|_){1}(.+?)(?:\1){1}/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => {
        console.log('italic!')

        // ignore to **text**, only *text*
        if (/(?:\*|_){2}(.+?)(?:\*|_){2}/g.test(text)) {
          return
        }

        let match = pattern.exec(text)

        const annotatedText = match[0]
        const matchedText = match[1]
        const startIndex = lineStart + match.index
        if (text.match(/^([~_ \n]+)$/g)) return

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          this.quillJS.insertText(startIndex, matchedText, { italic: true })
          this.quillJS.format('italic', false)
        }, 0)
      }
    }
  }
}

export default Bold
