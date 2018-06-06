import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Rating, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CurrentListItem extends React.Component {
    rightElement = item => {
        if(item.has){
            return (
                <Rating
                    readonly
                    type="star"
                    fractions={1}
                    ratingCount={10}
                    startingValue={item.count_right_answer}
                    imageSize={14}
                />
            )
        } else {
            return (
                <View style={styles.rightContainer}>
                    <Text style={styles.priceText} h4>Price: {item.pack.price}$</Text>
                    <Button
                        buttonStyle={styles.buyButton}
                        title={'Buy'}
                        icon={
                            <Icon
                                name='shopping-cart'
                                size={17}
                                color='white'
                            />
                        }
                    />
                </View>

            )
        }
    };

    render() {
        const {item} = this.props;
        return (
            <ListItem
                containerStyle={item.has ? styles.listContainer : styles.listContainerNotBought}
                key={item.id}
                title={item.pack.title}
                subtitle={item.pack.description}
                titleStyle={styles.title}
                onPress={() => {
                    if(item.has)
                        this.props.navigation.navigate('TaskPage', {
                            asks: item.pack.asks
                        })
                }}

                leftIcon={
                    <Icon
                        name={item.has ? 'unlock-alt' : 'lock'}
                        size={25}
                        color={item.has ? 'green' : 'black'}
                    />
                }
                rightElement={this.rightElement(item)}
            />
        );
    }
}

const styles = StyleSheet.create({
    buyButton: {
        width: 70
    },
    priceText : {
        fontSize: 16,
        marginRight: 15
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    listContainer: {
        borderWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 18
    },
    listContainerNotBought: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F1EEEE'
    }
});