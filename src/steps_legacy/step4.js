import React from "react"

function Img(props) {
  return <img alt={props.alt} src={props.src} />
}

function Title(props) {
  return <span>{props.label}</span>
}

/*
  For every specific need we are adding a new props to the layout component.
  It's the beginning of...
  props = {
    label,
    src,
    alt,    
    titleLast,
    onClickButton,
    onClickImg,
    ...
  }
  =================> nested props
  props = {
    title: {
      label,      
      titleFast,
      ...
    },
    button: {
      onClick,
    },    
    img: {
      src,
      alt,
      onClick,
      ...
    }
  }
*/
function Layout(props) {
  const onClickButton = () => {
    props.button.onClick()
  }
  const onClickImg = () => {
    // some intern stuff
    if (props.onClickImg) {
      props.img.onClick()
    }
  }
  return (
    <div>
      {!props.titleFirst ? <Title {...props.title} /> : null}
      <button onClick={onClickButton}>button</button>
      {props.src ? <Img {...props.img} onClick={onClickImg} /> : null}
      {props.titleLast ? <Title {...props.title} /> : null}
    </div>
  )
}

export { Layout }
