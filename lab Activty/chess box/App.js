import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  Box: {
    height: 480,
    width: 480,
    backgroundColor: "grey",
    borderStyle: "solid",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  black: {
    backgroundColor: "black",
    width: 60,
    height: 60,
  },
  white: {
    backgroundColor: "white",
    width: 60,
    height: 60,
  },
});