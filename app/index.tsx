import { Text, View } from "react-native";
import Menu from "./components/Menu";
import { Player } from "./components/Menu";
import useAppStore from "@/src/store/appStore";
import { useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useSplashScreenLogic } from "@/src/hooks/useSplashScreenLogic";


export default function Index(){
	const appIsReady = useSplashScreenLogic();
	const { user } = useAppStore();
	
	useEffect(() => {
		SplashScreen.preventAutoHideAsync();
	}, [])

	useEffect(() => {
		console.log("user : " + user);
	}, [user])

	const player: Player = {
		id: 1,
		nickname: 'PlayerOne'
	}

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
			onLayout={onLayoutRootView}
			testID="root-view"
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<Menu player={player}></Menu>
		</View>
	);
}
