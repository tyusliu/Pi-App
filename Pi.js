import React, { useState } from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
} from 'react-native';
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
				onPress={() => this._handlePress(this.props.num)}
			></Button>
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
		console.log(this.state);
		console.log(this.state.display.concat([num]));
		this.setState({
			display: this.state.display.concat([num]),
		});
		console.log('handle press', num);
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>{this.state.display.join('')}</Text>
				</View>
				<Number num='1' handleNumPress={this.handleNumPress}></Number>
				<Number num='2' handleNumPress={this.handleNumPress}></Number>
				<Number num='3' handleNumPress={this.handleNumPress}></Number>
				<Number num='4' handleNumPress={this.handleNumPress}></Number>
				<Number num='5' handleNumPress={this.handleNumPress}></Number>
				<Number num='6' handleNumPress={this.handleNumPress}></Number>
				<Number num='7' handleNumPress={this.handleNumPress}></Number>
				<Number num='8' handleNumPress={this.handleNumPress}></Number>
				<Number num='9' handleNumPress={this.handleNumPress}></Number>
				<Number num='0' handleNumPress={this.handleNumPress}></Number>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		alignItems: 'center',
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3',
	},
	buttonText: {
		textAlign: 'center',
		padding: 20,
		color: 'white',
	},
});
