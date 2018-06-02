import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Rating, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CurrentListItem extends React.Component {
    rightElement = item => {
        if (item.has) {
            return (
                <Rating
                    readonly
                    type="star"
                    fractions={1}
                    startingValue={item.rating}
                    imageSize={25}
                />
            )
        } else {
            return (
                <View style={styles.rightContainer}>
                    <Text style={styles.priceText} h4>You need {item.need_lvl} level.</Text>
                </View>
            )
        }
    };


    render() {
        return (
            <ListItem
                containerStyle={this.props.item.has ? styles.listContainer : styles.listContainerNotBought}
                key={this.props.item.id}
                title={this.props.item.name}
                titleStyle={styles.title}
                onPress={() => {
                    if(this.props.item.has)
                        this.props.navigation.navigate('CategoryPackList', {
                            packsInfo: this.props.item.packs
                        })
                }}

                leftIcon={
                    <Icon
                        name={this.props.item.has ? 'briefcase' : 'lock'}
                        size={25}
                        color={'black'}
                    />
                }
                rightElement={this.rightElement(this.props.item)}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 22
    },
    listContainerNotBought: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F1EEEE'
    },
    buyButton: {
        width: 70
    },
    priceText : {
        fontSize: 16,
        marginRight: 15
    },
    rightContainer: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});