import { cloneDeep } from 'lodash'

/**
 * Merges two arrays of posts based on matching id properties then sorts them by date
 * @param originalPosts
 * @param newPosts
 * @returns {*}
 */

export function mergeAndSortPosts(originalPosts = [], newPosts = []) {

  // Merge...
  let result = cloneDeep(originalPosts)
  newPosts.forEach(newPost => {
    let exists = false
    result.forEach((post, i) => {
      // If ID matches, overwrite.
      if(post.id === newPost.id) {
        result[i] = newPost
        exists = true
      }
    })
    // If not, add
    if(!exists) result.push(newPost)
  })

  // Sort into date order

  return sortByDate(result)

}

export function sortByDate(items, order = 'DESC') {
  return cloneDeep(items).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA > dateB) { return (order === 'ASC' ? 1 : -1) }
    if (dateA < dateB) { return (order === 'ASC' ? -1 : 1) }
    if (dateA === dateB) { return 0; }
  })
}
