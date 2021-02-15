export default (options) => {
  return {
    applyHtmlTags: ['blockquote'].map(tag => tag.toLowerCase())
  }
}
