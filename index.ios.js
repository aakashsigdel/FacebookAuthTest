import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FBSDKLoginManager } from 'react-native-fbsdklogin'

class FacebookLoginForIan extends Component {
  _handleLoginPress = () => {
    // login to facebook and ask user permission to read their email address
    FBSDKLoginManager.logInWithReadPermissions(['email'], this._loginCallback)
  }

  // callback for login with error and result
  _loginCallback = (error, result) => {
    if (error) {
      console.warn('Well! Life is hard')
    } else {
      if (result.isCancelled) {
        console.warn('¯\\_(ツ)_/¯', 'I was cancelled')
      } else {
        alert('Voila!, Now we are talking')
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this._handleLoginPress}
          style={styles.button}
        >
          <Text style={styles.text}>
            {'Login Using Facebook'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#395693',
    padding: 15,
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('FacebookLoginForIan', () => FacebookLoginForIan)
