/**
 * Tags List
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import config from 'config'
import { loadTags } from '../../store/tags/actions';

class TagsList extends React.Component {
  componentDidMount() {
    if(this.props.tags.tags.length < 1) {
      this.props.loadTags()
    }
  }

  render() {
    const { tags } = this.props
    return (
      <div className="TagsList">
        <pre>{JSON.stringify(tags)}</pre>
        {tags.tags.length > 0 &&
        <ul>
          {tags.tags.map((tag, i) =>
            <li key={i}><Link to={'/tag/'+tag.slug}>{tag.name}</Link></li>
          )}
        </ul>
        }
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadTags: () => dispatch(loadTags()),
  };
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsList)
