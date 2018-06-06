import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopInfo from '../../component/TopInfo/TopInfo';
import Question from "./Question";
import Answer from "./Answer";
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HelpBox from "./HelpBox";

export default class TaskPageContainer extends React.Component {
    static navigationOptions = {
        header: null,
    };

    // ASKS:
    // number
    // ask
    // answer_options
    // right_answer

    constructor(props){
        super(props);
        this.defAsks = props.navigation.getParam('asks', []).map( cur => {
            return {
                ...cur,
                buttonColor: ['blue', 'blue', 'blue', 'blue'],
                checked: false
            }
        });

        this.state={
            questionNumber: 0,
            asks: this.defAsks,
            isVisible: false
        }
    }

    checkResult = (rightAnswer, userAnswer) => {
        this.setState((prevState) => {
            const newState = {...prevState};
            newState.asks[prevState.questionNumber].buttonColor = newState.asks[prevState.questionNumber].buttonColor.map(() => 'blue');

            if(rightAnswer !== userAnswer){
                newState.asks[prevState.questionNumber].buttonColor[userAnswer] = 'red';
            }

            newState.asks[prevState.questionNumber].buttonColor[rightAnswer] = 'green';
            newState.asks[prevState.questionNumber].checked = true;
            return newState;
        });

        setTimeout(() => {
            this.setState(prevState => {
                const newState = {...prevState};
                newState.questionNumber++;
                return newState;
            })
        }, 1000)
    };

    render() {
        const ask = this.state.asks[this.state.questionNumber];
        return (
            <View style={styles.container}>
                <TopInfo/>

                <View style={styles.containerQuestion}>
                    <Text style={styles.text} h4>Question: {this.state.questionNumber + 1}</Text>
                    <Question
                        navigation={this.props.navigation}
                        emojiList={ask.ask}
                        fontSize={50}
                    />
                </View>

                <View style={styles.containerAnswer}>
                    <Answer
                        checkResult={(userAnswer) => this.checkResult(ask.right_answer, userAnswer)}
                        askInfo={ask}
                    />
                </View>

                <View style={styles.icon}>
                    <Icon
                        name='question-circle'
                        size={45}
                        color='#2089dc'
                        onPress={() => {
                            this.setState(prevState => {
                                const newState = {...prevState};
                                newState.isVisible = !prevState.isVisible;
                                return newState;
                            })
                        }}
                    />
                </View>

                <HelpBox isVisible={this.state.isVisible}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    containerQuestion: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    containerAnswer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        top: 50,
        right: 10
    }
});
