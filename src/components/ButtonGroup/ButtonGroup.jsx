import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './ButtonGroup.scss';

export default function ButtonGroup(props) {
  const { className, ...restProps } = props;
  return (
    <div
      className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'button-group', className) }
      { ...restProps } />
  );
}