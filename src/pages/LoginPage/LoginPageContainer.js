import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from "react-redux";
import { changeName } from "../../action/postAction";
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    onSubmitClick = () => {
        this.props.navigation.navigate('Menu')
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Wideapp</Text>
                <Text style={styles.title}>Login</Text>

                <Input
                    placeholder='Input your email'
                    leftIcon={
                        <Icon
                            name='envelope'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Input
                    placeholder='Input your password'
                    inputContainerStyle={styles.textInput}
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Button
                    onPress={this.onSubmitClick}
                    title={'SING IN'}
                    icon={
                        <Icon
                            name='check-circle'
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

export default connect(
    state => ({
        store: state.store
    }),
    dispatch => ({
        createName: name => dispatch(changeName(name))
    })
)(LoginPageContainer);

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        width: 300,
        height: 45
    },
    header: {
        fontSize: 23,
        position: 'absolute',
        top: 10,
        right: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10
    }

});
