/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Article from './Article'
export default function Column (props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '50px' }}>
      <h1>{props.type}</h1>
      {/* Jede Spalte besteht aus Artikeln bzw. Einträgen */}
      {props.state.data.filter(item => item.type === props.type).map(item =>
        <Article item={item}></Article>
      )}
    </div>)
}
