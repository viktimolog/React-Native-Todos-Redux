import React from 'react';
import { Footer, FooterTab, Button, Text, Badge } from 'native-base';
import {MODES} from '../constants';

import Icon from 'react-native-vector-icons/FontAwesome';

const AppFooter = ({mode = MODES.ALL, setMode = () => {}}) => (
    <Footer style={{height: 70}}>
      <FooterTab>
      <Button badge vertical
      disabled={mode === MODES.ALL}
      onPress={() => setMode(MODES.ALL)}
      >
        <Badge><Text>51</Text></Badge>
        <Icon name="tasks" size={20} color="red"/>
        <Text>Active</Text>
      </Button>
      <Button badge vertical
      disabled={mode === MODES.ACTIVE}
      onPress={() => setMode(MODES.ACTIVE)}
      >
          <Badge><Text>51</Text></Badge>
          <Icon name="tasks" size={20} color="yellow"/>
          <Text>Active</Text>
        </Button>
        <Button badge vertical
        disabled={mode === MODES.COMPLETED}
        onPress={() => setMode(MODES.COMPLETED)}
        >
          <Badge><Text>2</Text></Badge>
          <Icon name="tasks" size={20} color="green"/>
          <Text>Completed</Text>
        </Button>
      </FooterTab>
    </Footer>
);

export default AppFooter;
