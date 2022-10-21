import { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import Colors from "../constants/colors";

// import components
import { PrimaryButton, Title, Card, InstructionText } from "../components";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  // handle the number change
  const numberInputHandler = (text) => {
    setEnteredNumber(text);
  };

  // handle the number reset
  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  // confirm input handler
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      // show alert...
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none" // disable capitalie while typing
          autoCorrect={false} // disable autocoreect while typing
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsConatiner}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsConatiner: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
