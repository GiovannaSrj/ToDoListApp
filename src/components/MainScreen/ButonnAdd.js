import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenAddTask from "../../Screens/ScreenAddTask";
const { width, height } = Dimensions.get("window");

export default function ButonnAdd() {
  const [showAddTask, setShowAddTask] = useState(false);

  const handlePress = () => {
    setShowAddTask(true);
  };
  
  const navigation = useNavigation();
  
  return (
    // <TouchableOpacity onPress={() => navigation.navigate('AddTaskScreen')}>
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.circle}>
        <Image
          source={require("../../../assets/home-button.png")}
          style={styles.imgSize}
        />
      </View>
      {showAddTask && <ScreenAddTask onClose={() => setShowAddTask(false)} />}
    </TouchableOpacity>
  );

 
}

const styles = StyleSheet.create({
  circle: {
    top: height * -0.065,
    left: -20,
    justifycontent: "center",
    alignitems: "center",
    width: 64,
    height: 64,

    borderRadius: 100, // metade da largura/altura para fazer um círculo
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 10, // para sombra funcionar no Android
  },
  imgSize: {
    width: 100,
    height: 100,
  },
});