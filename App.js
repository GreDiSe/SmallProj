import React from 'react';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';

import LoginPageContainer from './src/pages/LoginPage/LoginPageContainer';
import MenuPageContainer from './src/pages/MenuPage/MenuPageContainer';
import CampaignPageContainer from './src/pages/CampaignPage/CampaignPageContainer';
import CategoryPackListContainer from './src/pages/CategoryPackListPage/CategoryPackListContainer';
import TaskPageContainer from './src/pages/TaskPage/TaskPageContainer';

import {Provider} from 'react-redux';
import store from './src/store/store';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        padding: 0
    },
});

const RootStack = createStackNavigator(
    {
        Menu: MenuPageContainer,
        Login: LoginPageContainer,
        Campaign: CampaignPageContainer,
        CategoryPackList: CategoryPackListContainer,
        TaskPage: TaskPageContainer
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