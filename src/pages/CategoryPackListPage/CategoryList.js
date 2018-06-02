import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CurrentListItem from "./CurrentCategoryListItem";

export default class CampaignList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.packsList}
                    keyExtractor={ ( item ) => item.id}
                    renderItem={ ({item}) => (
                        <CurrentListItem
                            navigation={this.props.navigation}
                            item={item}
                        />
                    )}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    listContainer: {
        borderWidth: 1,
        borderColor: 'black'
    }
});
