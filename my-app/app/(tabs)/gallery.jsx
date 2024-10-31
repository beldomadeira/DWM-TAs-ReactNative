import React, { useState } from "react";
import { Image, View, Button, StyleSheet, ScrollView } from "react-native";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2024/02/ias-generadoras-de-imagenes.jpg",
      accessibilityLabel: "Monito usando maquina de escribir",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2024/02/imagen-generada-con-midjourney-e1708680957351.jpg",
      accessibilityLabel:
        "Pintura de un paisaje tradicional de un campo de girasoles y casa de campo",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2023/10/Imagen-generada-con-Dalle-3-e1696926524914.jpg",
      accessibilityLabel:
        "Castor con una corona hecha de margaritas construyendo una presa con ramas y troncos en medio de un río que desemboca en una cascada",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2023/10/imagen-con-texto-generada-con-Dalle-3-en-Chat-Bing-e1696927636591.jpg",
      accessibilityLabel:
        "Paisaje de un río en un bosque y un castor con una corona de margaritas guiñando el ojo y sonriendo, sobre él aparece la frase ‘cuida los bosques",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2024/02/imagen-generada-con-nightcafe-e1708680739301.jpg",
      accessibilityLabel: "Oso hecho de nubes durmiendo en las nubes",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2023/07/Imagen-creada-con-Stable-Doodle-e1689767537646.jpg",
      accessibilityLabel:
        "Una serpiente sosteniendo un paraguas bajo la lluvia",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2023/08/imagen-generada-con-la-IA-Stable-Diffusion-XL-desde-Clipdrop-1-e1691490805983.jpg",
      accessibilityLabel:
        "Un elfo feliz con ropa de flores bailando en un hongo con una libélula",
    },
    {
      uri: "https://marketing4ecommerce.net/wp-content/uploads/2024/02/imagen-generada-con-dalle-3-1-e1708692706459.jpg",
      accessibilityLabel:
        "Un dragon amarillo sonriente flotando sobre un jardin de cerezos en flor estilo pixar",
    },
  ]);

  const modifyImage = (index) => {
    const newImages = [...images];
    newImages[index].uri =
      "data:image/jpeg;base64,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";
    setImages(newImages);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: image.uri }}
              style={styles.image}
              accessibilityLabel={image.accessibilityLabel}
            />
            <Button title="Cambiar" onPress={() => modifyImage(index)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  scrollContainer: {
    flexDirection: "column",
    padding: 10,
  },
});

export default Gallery;
