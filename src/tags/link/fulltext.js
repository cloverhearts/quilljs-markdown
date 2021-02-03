class Link {
  constructor (quillJS, options = {}) {
    this.quillJS = quillJS
    this.name = 'link'
    this.pattern = options.pattern || /(?:\[(.+?)\])(?:\((.+?)\))/g
    this.getAction.bind(this)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern) => new Promise((resolve) => {
        const startIndex = text.search(pattern)
        const matchedText = text.match(pattern)[0]
        const hrefText = text.match(/(?:\[(.*?)\])/g)[0]
        const hrefLink = text.match(/(?:\((.*?)\))/g)[0]
        const start = selection.index - 1 + startIndex
        if (startIndex !== -1) {
          setTimeout(() => {
            this.quillJS.deleteText(start, matchedText.length)
            this.quillJS.insertText(start, hrefText.slice(1, hrefText.length - 1),
              'link', hrefLink.slice(1, hrefLink.length - 1))
            resolve(true)
          }, 0)
        } else {
          resolve(false)
        }
      })
    }
  }
}

export default Link
