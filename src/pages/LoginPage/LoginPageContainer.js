import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { changeName } from "../../action/postAction";

class LoginPageContainer extends React.Component {
    changeName = () => {
        if(this.props.store.name !== 'Ivan')
            this.props.createName('Ivan');
        else this.props.createName('Dima');
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
    }
});
