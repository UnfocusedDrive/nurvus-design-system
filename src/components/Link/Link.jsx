import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Link.scss';

/**
 * Link component.
 * @returns {ReactElement} of Link component.
 */
export default function Link(props) {
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
