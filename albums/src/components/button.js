import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style = {styles.buttonStyle}>
	<Text style = {styles.textStyle}>{props.children}</Text>
	</TouchableOpacity>
	)
}
 const styles = {
 	buttonStyle : {
 		flex: 1,
 		alignSelf: 'stretch',
 		backgroundColor: '#fff',
 		borderRadius: 5,
 		borderWidth : 1,
 		borderColor: '#007aff',
 		marginLeft: 5,
 		marginRight: 5
 	}, 
 	textStyle: {
 		fontWeight: '600',
 		alignSelf: 'center',
 		color: '#007aff',
 		fontSize: 16,
 		paddingTop: 10,
 		paddingBottom: 10
 	}
 }
export default Button;