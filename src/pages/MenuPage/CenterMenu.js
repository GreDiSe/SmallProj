import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CenterMenu extends React.Component {
    render() {
        return (
            <View style={styles.menuContainer}>
                <Text style={styles.text} h2>Menu:</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Campaign')}
                    title="Campaign"
                    icon={
                        <Icon
                            name='user'
                            size={15}
                            color='white'
                        />
                    }
                    buttonStyle={styles.button}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Custom campaigns"
                    icon={
                        <Icon
                            name='users'
                            size={15}
                            color='white'
                        />
                    }
                    buttonStyle={styles.button}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 15,
        width: 300,
        height: 45
    },
    text: {
        marginTop: 0,
        textAlign: 'center',
        marginBottom: 20
    }
});
