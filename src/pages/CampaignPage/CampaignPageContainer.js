import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopInfo from '../../component/TopInfo/TopInfo';
import CampaignList from "./CampaignList";
import {connect} from "react-redux";

class CampaignPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <TopInfo/>
                <CampaignList
                    navigation={this.props.navigation}
                    default_category={this.props.default_category}
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

export default connect(
    state => ({
        default_category: state.gameInfo.default_category
    })
)(CampaignPageContainer);