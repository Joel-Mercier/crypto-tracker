import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import colors from "../../utils/Colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const width = (Dimensions.get("window").width - 64) / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 27,
    height: 54,
    width: width,
  },
  label: {
    color: "white",
    fontSize: 16,
    fontFamily: "GothamRounded-Bold",
    alignSelf: "center",
  },
});

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
