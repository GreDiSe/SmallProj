import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BottomMenu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title=""
                    icon={
                        <Icon
                            name='wrench'
                            size={15}
                            color='white'
                        />
                    }
                    buttonStyle={styles.button}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title=""
                    icon={
                        <Icon
                            name='list-ul'
                            size={15}
                            color='white'
                        />
                    }
                    buttonStyle={styles.button}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title=""
                    icon={
                        <Icon
                            name='thumbs-up'
                            size={15}
                            color='white'
                        />
                    }
                    buttonStyle={styles.button}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title=""
                    icon={
                        <Icon
                            name='table'
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
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 50,
        marginRight: 50
    },
    button: {
        borderRadius: 50,
        width: 50,
        height: 50
    }
});
