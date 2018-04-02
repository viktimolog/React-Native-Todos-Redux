import React from 'react'
import { Footer, FooterTab, Button, Text, Badge } from 'native-base'
import { MODES } from '../constants'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/FontAwesome'

const AppFooter = ({
                     mode = MODES.ALL,
                     todos = [],
                     setMode = () => {
                     }
                   }) => (
  <Footer style={{height: 70}}>
    <FooterTab>
      <Button badge vertical
              disabled={mode === MODES.ALL}
              onPress={() => setMode(MODES.ALL)}>
        <Badge>
          <Text>
            {todos.length}
          </Text>
        </Badge>
        <Icon
          name="tasks"
          size={20}
          color={mode === MODES.ALL ? 'green' : '#ccc'}/>
        <Text style={{color: mode === MODES.ALL ? 'green' : '#ccc'}}>ALL</Text>
      </Button>
      <Button badge vertical
              disabled={mode === MODES.ACTIVE}
              onPress={() => setMode(MODES.ACTIVE)}>
        <Badge>
          <Text>
            {todos.filter(todo => todo.completed === false).length}
          </Text>
        </Badge>
        <Icon
          name="rss"
          size={20}
          color={mode === MODES.ACTIVE ? 'green' : '#ccc'}/>
        <Text style={{color: mode === MODES.ACTIVE ? 'green' : '#ccc'}}>Active</Text>
      </Button>
      <Button badge vertical
              disabled={mode === MODES.COMPLETED}
              onPress={() => setMode(MODES.COMPLETED)}>
        <Badge>
          <Text>
            {todos.filter(todo => todo.completed === true).length}
          </Text>
        </Badge>
        <Icon
          name="check"
          size={20}
          color={mode === MODES.COMPLETED ? 'green' : '#ccc'}/>
        <Text style={{color: mode === MODES.COMPLETED ? 'green' : '#ccc'}}>Completed</Text>
      </Button>
    </FooterTab>
  </Footer>
)

AppFooter.propTypes = {
  todos: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired
}

export default AppFooter
