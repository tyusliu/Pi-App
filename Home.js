import React from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
} from 'react-native';

export default class Home extends React.Component {
	render() {
		return (
			<Button
				title='Go to Pi Game'
				onPress={() => this.props.navigation.navigate('Pi')}
			/>
		);
	}
}
