import React from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
} from 'react-native';
import { digits } from './Digits';

function Display() {
	return <Text>{digits}</Text>;
}

function Timer() {}

function Number(num) {}

export default function Pi(navigation) {
	return (
		<SafeAreaView>
			<Text>Welcome to the Pi game!</Text>
			<Display></Display>
		</SafeAreaView>
	);
}
