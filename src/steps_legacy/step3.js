import React from "react"

function Img(props) {
  return <img alt={props.alt} src={props.src} />
}

function Title(props) {
  return <span>{props.label}</span>
}

/*
  A new need for our layout.
  A project need to have the title in last position.
  So we add a new props: titleLast.
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
      {!props.titleLast ? <Title label={props.label} /> : null}
      <button onClick={onClickButton}>button</button>
      {props.src ? <Img {...props} onClick={onClickImg} /> : null}
      {props.titleLast ? <Title label={props.label} /> : null}
    </div>
  )
}

export { Layout }
