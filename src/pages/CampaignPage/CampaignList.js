import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CurrentListItem from "./CurrentCampaignListItem";

export default class CampaignList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.default_category}
                    keyExtractor={ ( item ) => item.id}
                    renderItem={ ({item}) => (
                        <CurrentListItem
                            item={item}
                            navigation={this.props.navigation}
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
