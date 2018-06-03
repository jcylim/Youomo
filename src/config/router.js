import React from 'react';
import { TabNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Image, Text } from 'react-native';

import Home from '../main/home';
import Score from '../main/score';
import Tracker from '../main/tracker';
import Friends from '../main/friends';
import Quest from '../main/quest';

const HomeStack = StackNavigator({
	Home: {
		screen: Home,
	},
	Score: {
		screen: Score,
	}
});

const MenuTabs = createBottomTabNavigator({
	Home: {
	    screen: HomeStack,
	    navigationOptions: {
	      	tabBarIcon: ({ tintColor }) => (
	        	<Image 
	          	 color={tintColor}
	          	 size={50}
	          	 source={require('../assets/icons/home.png')}
	        	/>
	      	),
		}
	},
	Tracker: {
	    screen: Tracker,
	    navigationOptions: {
	      	tabBarIcon: ({ tintColor }) => (
	        	<Image
	          	 color={tintColor}
	          	 size={50}
	          	 source={require('../assets/icons/tracker.png')}
	        	/>
	      	),
		}	
	},
	Friends: {
	    screen: Friends,
	    navigationOptions: {
	      	tabBarIcon: ({ tintColor }) => (
	        	<Image
	          	 color={tintColor}
	          	 size={50} 
	          	 source={require('../assets/icons/friends.png')}
	        	/>
	      	),
		}	
	},
	Quest: {
	    screen: Quest,
	    navigationOptions: {
	      	tabBarIcon: ({ tintColor }) => (
	        	<Image
	          	 color={tintColor}
	          	 size={50} 
	          	 source={require('../assets/icons/home.png')}
	        	/>
	      	),
		}	
	},
})

export default MenuTabs;