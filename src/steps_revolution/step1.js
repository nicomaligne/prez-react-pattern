import React from "react"

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>
}

function Title(props) {
  return <span>{props.label}</span>
}

function Layout(props) {
  return <div>{props.children}</div>
}

/*
Problem solve => no need of props like isLast or nested props

  - control on ordering and make each component owner of his own props.

  <Layout>
    <Title label="Hello World" />
    <Button label="MyButton" onClick={() => myFunction()}/>
  </Layout>

  OR

  <Layout>    
    <Button label="MyButton" onClick={() => myFunction()}/>
    <Title label="Hello World" />
  </Layout>
*/
