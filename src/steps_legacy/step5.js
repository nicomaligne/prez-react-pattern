import React from "react"

function Img(props) {
  return <img alt={props.alt} src={props.src} />
}

function Title(props) {
  return <span>{props.label}</span>
}

function PortalFeature(props) {
  // Add react portal example.
  return <div />
}

function AnotherPortalFeature(props) {
  return <div />
}

function Dropdown(props) {
  // Add dropdown
  return <div />
}

/*
  A few months later.
  Apropscalypse is here.
  props = {
    title: {
      label,      
      titleFast,
      onClick,
      ...,
    },
    img: {
      src,
      alt,
      onClick,
      ...,
    },
    portalFeature: {
      ...
    },
    anotherPortalFeature: {
      ...
    },
    dropdown: {
      ...
    },
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
      {props.somePropsPortalFeature ? (
        <PortalFeature {...props.portalFeature} />
      ) : null}
      <button onClick={onClickButton}>button</button>
      {props.src ? <Img {...props.img} onClick={onClickImg} /> : null}
      <Dropdown {...props.dropdown} />
      {props.titleLast ? <Title {...props.title} /> : null}
      {props.somePropsAnotherPortalFeature ? (
        <AnotherPortalFeature {...props.portalFeature} />
      ) : null}
    </div>
  )
}

export { Layout }
