import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./Tasks";
import Gallery from "./gallery";
import MovieSearcher from "./moviesearcher";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Tasks />
      </View>
      <View>
        <Gallery />
      </View>
      <View>
        <MovieSearcher />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
