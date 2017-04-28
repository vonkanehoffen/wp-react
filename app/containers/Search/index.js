/*
 *
 * Search
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import TextField from 'components/TextField'
import { loadPosts, loadMorePosts } from '../../store/posts/actions'
import Post from 'components/Post';
import ActionBar from 'components/ActionBar'

export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { fetchArgs, results, onSearchInput } = this.props;

    return (
      <div className="Search">
        <Helmet
          title="Search"
          meta={[
            { name: 'description', content: 'Description of Search' },
          ]}
        />
        <div className="container">
          <h2>Search</h2>
          <TextField value={fetchArgs.search || ''} onChange={onSearchInput} name="search" autoFocus />
          {results.map((post, i) => {
            return <Post post={post} expanded={false} key={i} />;
          })}
          <ActionBar/>
        </div>
      </div>
    );
  }
}

// Search.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function filterPostsBySearchTerm(posts, search) {
  // Basic filter of search results (so pre-existing records are returned instantly)
  // TODO: More comprehensive search filter.
  // See https://wordpress.stackexchange.com/questions/115945/how-does-wordpress-search-work-behind-the-scenes
  return posts.filter(post => {
    if(search) {
      if(post.title.rendered.toLowerCase().indexOf(search.toLowerCase()) !== -1) return post;
      if(post.content.rendered.toLowerCase().indexOf(search.toLowerCase()) !== -1) return post;
    }
    return false
  })
}
function mapDispatchToProps(dispatch) {
  return {
    onSearchInput: (event) => {
      dispatch(loadPosts({search: event.target.value, slug: false}))
    },
  };
}

const mapStateToProps = (state) => {
  return {
    fetchArgs: state.posts.fetchArgs,
    results: filterPostsBySearchTerm(
      state.posts.posts,
      state.posts.fetchArgs.search
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
