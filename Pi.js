import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { digits } from './Digits';

class Number extends React.Component {
	constructor(props) {
		super(props);
		console.log('props:', this.props);
	}

	_handlePress(num) {
		this.props.handleNumPress(num);
		console.log('pressed', num);
	}

	render() {
		return (
			<Button
				title={this.props.num}
				style={styles.button}
				onPress={() => this._handlePress(this.props.num)}
			>
				{this.props.num}
			</Button>
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

	handleNumPress(num) {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
		this.setState({
			display: this.state.display.concat([num]),
		});
		console.log(this.state.display.concat([num]));
		console.log('handle press', num);
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>{this.state.display.join('')}</Text>
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
	button: {
		marginBottom: 30,
		width: '25%',
		alignItems: 'center',
	},
	buttonText: {
		textAlign: 'center',
		padding: 20,
		color: 'white',
	},
});
