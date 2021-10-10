import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Layout.scss';

export default function Layout(props) {
  const {
    alignItems,
    className,
    display = 'block',
    justifyContent,
    itemDisplay,
    itemSpacing = 20,
    ...restProps
  } = props;

  return (
    <div
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'layout', className) }
      data-align-items={ alignItems }
      data-display={ display }
      data-item-display={ itemDisplay }
      data-item-spacing={ itemSpacing }
      data-justify-content={ justifyContent }
      { ...restProps }
    />
  );
}