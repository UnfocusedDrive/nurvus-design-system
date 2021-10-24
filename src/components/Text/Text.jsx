import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';

/**
 * Text component.
 * @returns {ReactElement} of Text component.
 */
export default function Text(props) {
    const {
      children,
      className,
      ...restProps
    } = props;

    return (
      <span
        className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'text', className) }
        { ...restProps }
      >
        { children }
      </span>
    );
}