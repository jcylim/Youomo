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

export default class Home extends Component {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require('../assets/icons/logo.png')} />
				</View>
				<View style={styles.scoreContainer}>
					<Text>Score</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text>Home Page</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 200,
		height: 200,
		alignItems: 'center'
	},
	imageContainer: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	scoreContainer: {
		flex: 1,  
		backgroundColor: '#800080',
	},
	infoContainer: {
		flex: 5, 
		backgroundColor: 'black',
	},
})