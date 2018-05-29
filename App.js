import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import LoginPageContainer from './src/pages/LoginPage/LoginPageContainer';
import {Provider} from 'react-redux';
import store from './src/store/store';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
});

const App = () => (
    <Provider store={store}>
        <Container>
            <Content>
                <View style={styles.container}>
                    <Text>
                        Пожалуйста... Заработай.. СУКА МРАЗОТА
                    </Text>
                </View>
            </Content>
            <LoginPageContainer/>
        </Container>
    </Provider>
);

export default App;