import React from 'react'
import { Col, Row } from 'react-bootstrap'
import items from "../data/items.json"
import StoreItem from "../components/StoreItem"


const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map(item => (
          <Col><StoreItem {...item}/></Col>
        ))}
      </Row></>
  )
}

export default Store