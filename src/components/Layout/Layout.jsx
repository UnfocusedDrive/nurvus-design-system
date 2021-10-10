import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Layout.scss';

export default function Layout(props) {
  const {
    alignItems,
    className,
    display = 'block',
    itemDisplay,
    ...restProps
  } = props;

  return (
    <div
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'layout', className) }
      data-align-items={ alignItems }
      data-display={ display }
      data-item-display={ itemDisplay }
      { ...restProps }
    />
  );
}