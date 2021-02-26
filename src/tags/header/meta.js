export default (options) => {
  return {
    applyHtmlTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header'].map(tag => tag.toLowerCase())
  }
}
