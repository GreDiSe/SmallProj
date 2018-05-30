import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import LoginPageContainer from './src/pages/LoginPage/LoginPageContainer';
import MenuPageContainer from './src/pages/MenuPage/MenuPageContainer';
import {Provider} from 'react-redux';
import store from './src/store/store';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        padding: 0,
        paddingTop: 20
    },
});

const RootStack = createStackNavigator(
    {
        Menu: MenuPageContainer,
        Login: LoginPageContainer,
    },
    {
        initialRouteName: 'Login',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container style={styles.container}>
                    <RootStack/>
                </Container>
            </Provider>
        )
    }
};