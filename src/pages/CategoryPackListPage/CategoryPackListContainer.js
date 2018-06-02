import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopInfo from '../../component/TopInfo/TopInfo';
import CategoryList from "./CategoryList";

export default class CategoryPackListContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const packsList = this.props.navigation.getParam('packsInfo', []);
        return (
            <View style={styles.container}>
                <TopInfo/>
                <CategoryList
                    navigation={this.props.navigation}
                    packsList={packsList}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});
