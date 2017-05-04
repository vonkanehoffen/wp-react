/**
 * Tags List
 */

import React from 'react';
import { connect } from 'react-redux';
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
