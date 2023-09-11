import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "black"
    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
      height: Dimensions.get('window').width * 0.6,
      width: Dimensions.get('window').width * 0.6
    },
    sorriso:{
      justifyContent: "space-between",
      alignItems: "center"
    },
    botao: {
      color: "#ffff"
    }
  });
  