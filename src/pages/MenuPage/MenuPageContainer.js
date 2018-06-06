import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomMenu from './BottomMenu';
import TopInfo from '../../component/TopInfo/TopInfo';
import CenterMenu from "./CenterMenu";

export default class MenuPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <TopInfo/>
                <CenterMenu navigation={this.props.navigation}/>
                <BottomMenu navigation={this.props.navigation}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});
