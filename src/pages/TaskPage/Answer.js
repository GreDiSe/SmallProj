import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Answer extends React.Component {
    chose = (i, checked) => {
        if(!checked)
            this.props.checkResult(i);
    };
    buttonColor = (color) => {
        if(color === 'red'){
            return styles.buttonRed
        } else if (color === 'blue'){
            return styles.buttonBlue
        } else {
            return styles.buttonGreen
        }

    };

    render() {
        const {checked, answer_options, buttonColor} = this.props.askInfo;
        return (
            <View style={styles.container}>
                {
                    answer_options.map((cur, i) => {
                        return (
                            <Button
                                key={i}
                                onPress={() => this.chose(i, checked)}
                                title={cur}
                                buttonStyle={this.buttonColor(buttonColor[i])}
                            />
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'stretch',
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 10
    },
    buttonBlue: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#2089dc'
    },
    buttonRed: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'red'
    },
    buttonGreen: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'green'
    }
});
