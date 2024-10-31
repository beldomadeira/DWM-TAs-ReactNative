import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MovieSearcher = () => {
  const [movie, setMovie] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    fetch(`http://www.omdbapi.com/?apikey=23ae2ab8&t=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("No se encontró la película");
          setMovie(null);
        }
      });
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar película"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        movie && (
          <View style={styles.movieContainer}>
            <Image source={{ uri: movie.Poster }} style={styles.image} />
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.plot}>{movie.Plot}</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    padding: 8,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  movieContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  plot: {
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default MovieSearcher;
