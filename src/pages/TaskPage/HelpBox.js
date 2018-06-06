import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Overlay} from 'react-native-elements';

export default class HelpBox extends React.Component {
    render() {
        return (
            <Overlay
                isVisible={this.props.isVisible}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayBackgroundColor="white"
                width={300}
                height={400}
            >
                <Text>Hello from Overlay!</Text>
                <Button
                    title='Click'
                />
            </Overlay>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'stretch',
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 10
    }
});
