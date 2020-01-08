/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
export default function Article ({ item }) {
  return (<a style={{ display: 'flex', background: 'white' }} href={item.url} className="App">
    <div style={{ height: '200px', width: '200px', margin: '10px' }}>
      <img style={{ 'max-height': '200px', 'max-width': '200px' }} src={item.image}></img>
    </div>
    <div style={{
      'max-height': '200px',
      'max-width': '200px',
      margin: '10px',
      'font-size': 'small',
      'font-weight': 'bold',
      color: 'cornflowerblue'
    }}>
      <p>{item.title}</p>
      <p>-->{item.author}</p>
    </div>
  </a>)
}
