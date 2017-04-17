/*
 *
 * Search
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { TextField } from 'material-ui';
import { loadPosts, loadMorePosts } from '../../store/posts/actions';
import Post from 'components/Post';
export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { fetchArgs, results, onSearchInput } = this.props;

    return (
      <div>
        <Helmet
          title="Search"
          meta={[
            { name: 'description', content: 'Description of Search' },
          ]}
        />
        <h2>This is search.</h2>
        <TextField value={fetchArgs.search} onChange={onSearchInput} name="search" />
        {results.map((post, i) => {
          return <Post post={post} key={i} />;
        })}
      </div>
    );
  }
}

// Search.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function filterPostsBySearchTerm(posts, search) {
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
      dispatch(loadPosts({search: event.target.value}))
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
