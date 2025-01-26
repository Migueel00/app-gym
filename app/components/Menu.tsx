import React from "react"
import { useState, useEffect} from "react"
import { Text, View } from "react-native";

export interface Player{
    id: number,
    nickname: string
}

interface MenuProps{
    player: Player
}
function Menu({ player } : MenuProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isRendered, setIsRendered] = useState<boolean>(true);

    useEffect(() => {
        console.log("Change is loaded");
    }, [isLoaded]);

    setTimeout(() => {
        setIsLoaded(true);
    }, 3000);

    useEffect(() => {
        console.log("Solo se ejecuta cuando se haya cargado el componente");
    }, []);

        
    return (
        
        <View>
            { isRendered ? (<Text>{player.id}</Text>
            ) : null}
            <Text>{player.nickname}</Text>
        </View>
    )
}


const MenuContainer = () => {
    const player : Player = {
        id: 1,
        nickname: 'PlayerOne'

    }

    return (
        <Menu player={player}/>
    )
}

export default Menu; 