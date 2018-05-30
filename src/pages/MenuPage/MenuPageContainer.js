import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class MenuPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Меню</Text>
                <Text>Ура получилось</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="ДАЛЬШЕ СУКА"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MenuPageContainer;