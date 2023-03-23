import React from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
} from 'react-native';

export default function Pi(navigation) {
	return (
		<Button
			title='Go to Pi Game'
			onPress={() => navigation.navigate('Pi')}
		/>
	);
}
