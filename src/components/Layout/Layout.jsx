import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Layout.scss';

export default function Layout(props) {
  const { className, itemDisplay, ...restProps } = props;

  return (
    <div
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'layout', className) }
      data-item-display={ itemDisplay }
      { ...restProps }
    />
  );
}