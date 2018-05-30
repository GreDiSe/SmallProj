import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { connect } from "react-redux";
import { changeName } from "../../action/postAction";

class LoginPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    changeName = () => {
        if(this.props.store.name !== 'Ivan')
            this.props.createName('Ivan');
        else this.props.createName('Dima');

        this.props.navigation.navigate('Menu')
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Wideapp y y</Text>
                <Text>Убейте меня</Text>
                <Button
                    onPress={this.changeName}
                    title={this.props.store.name}
                />
                <TextInput
                    style={StyleSheet.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}

export default connect(
    state => ({
        store: state.store
    }),
    dispatch => ({
        createName: name => dispatch(changeName(name))
    })
)(LoginPageContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24
    },
    textInput: {
        height: 100,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1
    }

});
