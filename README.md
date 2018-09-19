# React Native Toast (remobile)
Toast message popup for Android and Ios

## Installation
```
npm install ejoy-toast --save
```

### Installation (iOS)
* Drag RCTToast.xcodeproj to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTToast.a from the Products folder inside the RCTToast.xcodeproj.
* Look for Header Search Paths and make sure it contains both $(SRCROOT)/../../../react-native/React as recursive.

### Installation (Android)
From version 2, Android Version implement from `ToastAndroid` API. So, this do not necessary for native linking in Android



### Example
```js
var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    View,
    Image
} = ReactNative;

var Toast = require('react-native-toast');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Toast.show.bind(null, "this is a message")}>
                    show
                </Button>
                <Button onPress={Toast.showShortTop.bind(null, "this is a message")}>
                    showShortTop
                </Button>
                <Button onPress={Toast.showShortCenter.bind(null, "this is a message")}>
                    showShortCenter
                </Button>
                <Button onPress={Toast.showShortBottom.bind(null, "this is a message")}>
                    showShortBottom
                </Button>
                <Button onPress={Toast.showLongTop.bind(null, "this is a message")}>
                    showLongTop
                </Button>
                <Button onPress={Toast.showLongCenter.bind(null, "this is a message")}>
                    showLongCenter
                </Button>
                <Button onPress={Toast.showLongBottom.bind(null, "this is a message")}>
                    showLongBottom
                </Button>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical:150,
    }
});
```

### HELP
* look https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin


### thanks
* this project come from https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

### see detail use
* https://github.com/remobile/react-native-template
