import React from 'react';
import PropTypes from 'prop-types';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Progress.scss';

/**
 * Progress component. Use it to track progress!
 * @returns {ReactElement} of Progress component.
 */
class Progress extends React.Component {
  render() {
    const { className, percent = 0 } = this.props;

    return (
      <div className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'progress', className) }>
        <div className="bar" style={{ width: `${percent}%` }} />
      </div>
    );
  }
}

Progress.propTypes = {
  /**
   * Custom class name.
   */
   className: PropTypes.string,
   /**
    * Progress percent.
    */
    percent: PropTypes.number
  };

export default  Progress;