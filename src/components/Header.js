import React from 'react'
import { Header, Body, Title } from 'native-base'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import ModalWindow from './ModalWindow'

const AppHeader = ({addTodo}) => (
  <Header>
    <Body style={styles.container}>
    <Title>
      React Native Todos Redux
    </Title>
    <ModalWindow addTodo={addTodo}/>
    </Body>
  </Header>
)

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72
  }
})

AppHeader.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AppHeader
