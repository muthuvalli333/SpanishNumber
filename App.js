import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors = {
	1: '#3C40C6',
	2: '#EEC213',
	3: '#F4C724',
	4: '#E74292',
	5: '#BB2CD9',
	6: '#1287A5',
	7: '#0A79DF',
	8: '#4834DF',
	9: '#25CCF7',
	10: '#7B8788'
};
const soundList = {
	one: require('./assets/assets3/one.wav'),
	two: require('./assets/assets3/two.wav'),
	three: require('./assets/assets3/three.wav'),
	four: require('./assets/assets3/four.wav'),
	five: require('./assets/assets3/five.wav'),
	six: require('./assets/assets3/six.wav'),
	seven: require('./assets/assets3/seven.wav'),
	eight: require('./assets/assets3/eight.wav'),
	nine: require('./assets/assets3/nine.wav'),
	ten: require('./assets/assets3/ten.wav')
};

export default class App extends React.Component {
	playSound = async (number) => {
		const soundObject = new Audio.Sound();
		try {
			let path = soundList[number];
			await soundObject.loadAsync(path);
			await soundObject
				.playAsync()
				.then(async (playbackStatus) => {
					setTimeout(() => {
						soundObject.unloadAsync();
					}, playbackStatus.playableDurationMillis);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.gridContainer}>
					<Image style={styles.logo} source={require('./assets/assets3/logo.png')} />
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[1] }, styles.item ]}
							onPress={() => {
								this.playSound('one');
							}}
						>
							<Text style={styles.itemText}>One</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[2] }, styles.item ]}
							onPress={() => {
								this.playSound('two');
							}}
						>
							<Text style={styles.itemText}>Two</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[3] }, styles.item ]}
							onPress={() => {
								this.playSound('three');
							}}
						>
							<Text style={styles.itemText}>Three</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[4] }, styles.item ]}
							onPress={() => {
								this.playSound('four');
							}}
						>
							<Text style={styles.itemText}>Four</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[5] }, styles.item ]}
							onPress={() => {
								this.playSound('five');
							}}
						>
							<Text style={styles.itemText}>Five</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[6] }, styles.item ]}
							onPress={() => {
								this.playSound('six');
							}}
						>
							<Text style={styles.itemText}>Six</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[7] }, styles.item ]}
							onPress={() => {
								this.playSound('seven');
							}}
						>
							<Text style={styles.itemText}>Seven</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[8] }, styles.item ]}
							onPress={() => {
								this.playSound('eight');
							}}
						>
							<Text style={styles.itemText}>Eight</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[9] }, styles.item ]}
							onPress={() => {
								this.playSound('nine');
							}}
						>
							<Text style={styles.itemText}>Nine</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowContainer}>
						<TouchableOpacity
							style={[ { backgroundColor: listBackgroundColors[10] }, styles.item ]}
							onPress={() => {
								this.playSound('ten');
							}}
						>
							<Text style={styles.itemText}>Ten</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	gridContainer: {
		flex: 1,
		margin: 5
	},
	logo: {
		alignSelf: 'center',
		marginTop: 50
	},
	rowContainer: {
		flexDirection: 'row'
	},
	item: {
		flex: 1,
		height: 110,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 2
	},
	itemText: {
		justifyContent: 'center',
		color: '#FFF',
		fontSize: 20
	}
});
