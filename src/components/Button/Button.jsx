import React from 'react';
import classNames  from 'classnames';
import PropTypes from 'prop-types';
import CONSTANT from '../../constants.js';
import './Button.scss';

/**
 * Button component.
 * @returns {ReactElement} of Button component.
 */
function Button(props) {
  const {
    className,
    children,
    size = 'medium',
    ...restProps
  } = props;

  return (
    <button
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'button', className) }
      data-size={ size }
      { ...restProps }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  /**
   * Custom class name.
   */
  className: PropTypes.string,
  /**
   * Content to render inside button.
   */
  children: PropTypes.node,
  /**
   * Size of button.
   */
   size: PropTypes.oneOf[
    'extra-large',
    'large',
    'medium',
    'small',
    'mini'
   ]
};

export default Button;
