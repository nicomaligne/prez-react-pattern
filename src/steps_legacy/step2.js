import React from "react"

function Img(props) {
  if (props.onClick) {
    return (
      <button onClick={props.onClick}>
        <img alt={props.alt} src={props.src} />
      </button>
    )
  }
  return <img alt={props.alt} src={props.src} />
}

/*
  Need of a new element, a img.
  A component has been created, but not every project needs it.
  So we are making a condition with the main img props : src.
*/
function Layout(props) {
  const onClickButton = () => {
    props.onClick()
  }
  const onClickImg = () => {
    // some intern stuff
    if (props.onClickImg) {
      props.onClickImg()
    }
  }
  return (
    <div>
      <span>Hello world</span>
      <button onClick={onClickButton}>button</button>
      {props.src ? <Img onClick={onClickImg} {...props} /> : null}
    </div>
  )
}

export { Layout }
