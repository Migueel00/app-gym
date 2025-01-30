import { Text, View } from "react-native";
import Menu from "./components/Menu";
import { Player } from "./components/Menu";
import useAppStore from "./store/appStore";
import { useEffect } from "react";

export default function Index() {
  const { user } = useAppStore();

  useEffect(() => {
    console.log("user : " + user);
  }, [user])

  const player : Player = {
    id: 1,
    nickname: 'PlayerOne'
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
  

      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Menu player={player}></Menu>
    </View>
  );
}
