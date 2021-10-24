import React from 'react';
import classNames  from 'classnames';
import CONSTANT from '../../constants.js';
// import './Text.scss';

// function getTag(level) {
//   switch (level) {
//     case 1:
//       return 'h1';
//       break;
//     case 2:
//       return 'h2';
//       break;
//     case 3:
//       return 'h3';
//       break;
//     case 4:
//       return 'h4';
//       break;
//     case 5:
//       return 'h5';
//       break;
//     case 6:
//     default:
//       return 'h6';
//  }
// }

/**
 * Text component.
 * @returns {ReactElement} of Text component.
 */
export default function Text(props) {
    const {
      children,
      className,
      level = 1,
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

    // return React.createElement(
    //   getTag(level),
    //   {
    //     className: classNames(`${CONSTANT.CLASS_PREFIX}`, 'Text', className),
    //     ...restProps
    //   },
    //   children
    // );
}