import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {paddingTop: 5}
        })
    }
})
