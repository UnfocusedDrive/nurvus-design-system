import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
import './Button.scss';

/**
 * Button component.
 * @returns {ReactElement} of Button component.
 */
export default class Button extends React.Component {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <button
       className={ classNames(`${CONSTANT.CLASS_PREFIX}`, 'button', className) }
       { ...props }
      >
        { children }
      </button>
    );
  }
}