import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { Button, Text, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";

class TopInfo extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <Header
                leftComponent={
                    <View style={styles.container}>
                        <Icon
                            size={35}
                            color='white'
                            name='user-circle'
                            style={styles.icon}
                        />
                        <View>
                            <View>
                                <Text style={styles.text} h4>{this.props.store.login}</Text>
                                <Text style={styles.textLevel} h4>Level: {this.props.store.level}</Text>
                            </View>
                        </View>
                    </View>
                }
                rightComponent={
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.textGold} h4>Gold: {this.props.store.gold}</Text>
                            <Text style={styles.textMoney} h4>Money: {this.props.store.money}$</Text>
                        </View>
                        <Icon
                            size={25}
                            color='white'
                            name='shopping-cart'
                            style={styles.iconShop}
                        />
                    </View>
                }
                statusBarProps={statusBarStyle}
            />
        );
    }
}
const statusBarStyle = {
    hidden: true
};
const styles = StyleSheet.create({
    icon: {
        marginTop: 5,
        marginRight: 10
    },
    textMoney: {
        color: 'white',
        fontSize: 16
    },
    textGold: {
        color: 'white',
        fontSize: 16
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    textLevel: {
        color: 'white',
        fontSize: 14
    },
    iconShop: {
        margin: 7
    }
});


export default connect(
    state => ({
        store: state.gameInfo
    })
)(TopInfo);