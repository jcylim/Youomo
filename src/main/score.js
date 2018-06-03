import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput, 
	ToastAndroid, 
	DrawerLayoutAndroid, 
	TouchableOpacity,
	TouchableHighlight, 
	BackHandler, 
	Platform, 
	StatusBar, 
	Image,
	ListView,
	ScrollView,
	Dimensions
	} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Score extends Component {

	render() {
		return (
			<View>
				<Text>Score Page</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navBarContainer: {
		backgroundColor: '#800080',
        flexDirection: 'row',
        //marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        paddingTop: 15 
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
})