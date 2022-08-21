import React from 'react';
import NavBar from './NavBar';

function StyleguideRenderer(props) {
  const navHeight = 50;
  const border = '1px solid  rgba(225, 226, 236, 1)';

  return (
    <div
      style={{
        paddingTop: 30,
        paddingLeft: 200
      }}
    >

      <NavBar
        { ...props }
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          height: navHeight,
          background: 'white',
          zIndex: 1,
          // paddingLeft: 200,
          borderBottom: border
          // height: '100%'
        }}
      />
    <div
      style={{
        position: 'fixed',
        top: navHeight,
        bottom: 0,
        left: 0,
        width: 200,
        background: 'white',
        zIndex: 2,
        borderRight: border
      }}
    >
      { props.toc }
    </div>
    <div
      style={{
        background: 'rgba(249, 249, 252, 1)',
        padding: 20
      }}
    >
    { props.children }
    </div>
  </div>
  )
}
export default StyleguideRenderer;