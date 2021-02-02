class Codeblock {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'pre'
    this.pattern = options.pattern || /^(```)/g
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
        const [line] = this.quillJS.getLine(selection.index)
        setTimeout(() => {
          const startIndex = this.quillJS.getIndex(line)
          this.quillJS.deleteText(startIndex, originalText.length + 1)
          setTimeout(() => {
            let line = this.quillJS.getLine(startIndex)[0]
            while (line) {
              const lineOffset = this.quillJS.getIndex(line)
              const _text = line.domNode.textContent
              const offsetText = line.domNode.textContent.length
              const isBreak = this.pattern.test(_text)
              if (isBreak) {
                this.quillJS.deleteText(lineOffset, _text.length)
                resolve(true)
                return
              }
              this.quillJS.formatLine(lineOffset, 0, 'code-block', true)
              line = this.quillJS.getLine(lineOffset + offsetText + 1)[0]
            }
            resolve(true)
          }, 0)
        }, 0)
      }),
      release: () => {
        setTimeout(() => {
          const cursorIndex = this.quillJS.getSelection().index
          const block = this.quillJS.getLine(cursorIndex)[0]
          const blockText = block.domNode.textContent
          if (block && blockText && blockText.replace('\n', '').length <= 0) {
            this.quillJS.format('code-block', false)
          }
        }, 0)
      }
    }
  }
}

export default Codeblock
