import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  ProgressBar
} from "react-native";

import { x } from "./dummyData";

const platformText = { ios: "iOS", android: "Android", web: "Web" };

export default class ExampleApp extends Component {
  test = e => {
    console.log("hey!");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          RN Web! (you're on {platformText[Platform.OS]})
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
          <ProgressBar indeterminate={true} />
        </Text>

        <View style={styles.boxContainer}>
          {x.map((x, index) => {
            return (
              <Text key={index} style={styles.box}>
                <div>
                  {x.player1} VS {x.player2}
                </div>
                <Button onPress={this.test} title={x.player1} style={styles.buttonStyle} />
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  boxContainer: {
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    backgroundColor: "#d3d3d3",
    fontSize: 20,
    padding: 20,
    borderRadius: 4,
    width: 365,
    marginBottom: 5
  },
  buttonStyle: {
    fontSize: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
