import React from "react"

/*
  A simple layout with a title and a button.
  Nothing scary here.
*/
function Layout(props) {
  const onClick = () => {
    props.onClick()
  }

  return (
    <div>
      <span>Hello world</span>
      <button onClick={onClick}>button</button>
    </div>
  )
}

export { Layout }
