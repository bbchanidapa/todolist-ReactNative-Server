import React, { Component } from 'react'
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Container,
  Text
}from 'native-base'

class Navbars extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              {/* <Icon name='menu' /> */}
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
      

    )
  }
}

export default Navbars
