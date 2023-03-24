import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { Button } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { digits } from './Digits';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { elapsedTime: 0 };
		this.interval = null;
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ elapsedTime: Date.now() - this.props.startTime });
		}, 1);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { elapsedTime } = this.state;
		const seconds = Math.floor(elapsedTime / 1000);
		const milliseconds = elapsedTime % 1000;

		return (
			<Text style={styles.time}>
				{seconds}.{milliseconds}
			</Text>
		);
	}
}

class Number extends React.Component {
	constructor(props) {
		super(props);
	}

	_handlePress(num) {
		this.props.handleNumPress(num);
		console.log('pressed', num);
	}

	render() {
		return (
			<TouchableOpacity
				title={this.props.num}
				style={styles.button}
				mode='outlined'
				textColor='green'
				onPress={() => this._handlePress(this.props.num)}
				onPressIn={() =>
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
				}
			>
				<Text style={styles.buttonText}>{this.props.num}</Text>
			</TouchableOpacity>
		);
	}
}

export default class Pi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: ['3', '.'],
			isStart: false,
		};
		this.handleNumPress = this.handleNumPress.bind(this);
	}

	resetGame() {
		console.log('Reset the game.');
		this.setState({
			display: ['3', '.'],
			isStart: false,
			startTime: 0,
		});
	}

	handleNumPress(num) {
		if (!this.state.isStart) {
			this.setState({ isStart: true, startTime: Date.now() });
		}
		const newDisplay = [...this.state.display, num];
		const lastChar = newDisplay[newDisplay.length - 1];
		const nextChar = digits[newDisplay.length - 1];
		console.log('lastChar is', lastChar);
		console.log('nextChar is', nextChar);
		if (lastChar === nextChar) {
			this.setState({
				display: this.state.display.concat([num]),
			});
		} else {
			Alert.alert('WRONG!');
			this.resetGame();
		}

		console.log(this.state.display.concat([num]));
		console.log('handle press', num);
	}

	render() {
		return (
			<SafeAreaView>
				<View style={styles.main}>
					<View style={styles.row}>
						<Text style={styles.display} numberOfLines={1}>
							{this.state.display.join('')}
						</Text>
					</View>
					<View style={styles.row}>
						{this.state.isStart ? (
							<Timer
								style={styles.time}
								startTime={this.state.startTime}
							/>
						) : (
							<Text style={styles.time}>0.00</Text>
						)}
					</View>
					<View style={styles.main}>
						<View style={styles.row}>
							<Number
								num='7'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='8'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='9'
								handleNumPress={this.handleNumPress}
							></Number>
						</View>
						<View style={styles.row}>
							<Number
								num='4'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='5'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='6'
								handleNumPress={this.handleNumPress}
							></Number>
						</View>
						<View style={styles.row}>
							<Number
								num='1'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='2'
								handleNumPress={this.handleNumPress}
							></Number>
							<Number
								num='3'
								handleNumPress={this.handleNumPress}
							></Number>
						</View>
						<View style={styles.row}>
							<Number
								num='0'
								handleNumPress={this.handleNumPress}
							></Number>
						</View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	container: {
		paddingTop: 60,
		alignItems: 'center',
	},
	display: {
		fontSize: 48,
		marginBottom: '10%',
		textAlign: 'right',
		direction: 'rtl',
	},
	button: {
		marginBottom: 30,
		width: '20%',
		aspectRatio: '1',
		borderRadius: '50%',
		borderWidth: 1,
		borderColor: 'green',
		border: '1px',
		marginBottom: 6,
		margin: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 32,
		color: 'green',
	},
	time: {
		fontSize: 32,
		marginBottom: '30%',
	},
});
