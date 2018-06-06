import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import nodeEmoji from "node-emoji";


export default class Question extends React.Component {
    render() {
        const textStyle = {
            textAlign: 'center',
            fontSize: this.props.fontSize
        };
        return (
            <View style={styles.container}>
                <Text style={textStyle}>
                    {
                        this.props.emojiList.map(cur=> {
                            return nodeEmoji.get(cur)
                        })
                    }
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        margin: 20,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});
