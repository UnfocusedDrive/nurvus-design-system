import React from 'react';
import PropTypes from 'prop-types';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Link.scss';

/**
 * Link component.
 * @returns {ReactElement} of Link component.
 */
function Link(props) {
  const {
    children,
    className,
    ...restProps
  } = props;

  return (
    <a
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'link', className) }
      { ...restProps }
    >
      { children }
    </a>
  );
}

Link.propTypes = {
  /**
   * Custom class name.
   */
  className: PropTypes.string,
  /**
   * Content to render.
   */
  children: PropTypes.node
};

export default Link;
