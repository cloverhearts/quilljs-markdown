class AbstractTag {
  _getCustomPatternOrDefault (options, tagName, defaultPattern) {
    return options.tags && options.tags[tagName] && options.tags[tagName].pattern ? options.tags[tagName].pattern : defaultPattern
  }

  _getActiveTagsWithoutIgnore (tags, ignoreTags) {
    if (Array.isArray(ignoreTags)) {
      return tags.reduce((allowTags, tag) => {
        if (!ignoreTags.includes(tag)) {
          allowTags.push(tag.toLowerCase())
        }
        return allowTags
      }, [])
    }
    return tags
  }
}

export default AbstractTag
