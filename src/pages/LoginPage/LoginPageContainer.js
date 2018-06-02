import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { connect } from "react-redux";
import { changeName } from "../../action/postAction";
import { Button } from 'react-native-elements';
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
                <StatusBar hidden={true}/>
                <Text style={styles.header}>Wideapp</Text>
                <Text style={styles.title}>Log In to Wideapp</Text>

                <Button
                    onPress={this.onSubmitClick}
                    title={'Log In with Facebook'}
                    icon={
                        <Icon
                            name='facebook-square'
                            size={17}
                            color='white'
                        />
                    }
                    buttonStyle={styles.buttonFacebook}
                />

                <Button
                    onPress={this.onSubmitClick}
                    title={'Log In with Google+'}
                    icon={
                        <Icon
                            name='google-plus'
                            size={17}
                            color='white'
                        />
                    }
                    buttonStyle={styles.buttonGoogle}
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
    buttonFacebook: {
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
    buttonGoogle: {
        backgroundColor: 'red',
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        height: 45
    }
});
