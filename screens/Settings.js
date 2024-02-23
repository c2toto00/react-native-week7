import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "../context/useTheme";
import Styles from "../Styles";
import ThemeSwitchButton from "../components/ThemeSwitchButton";

export default function Settings(props){
    const { isDarkMode } = useTheme();

    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <View style={{flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[isDarkMode ? Styles.dark : Styles.light]}>Dark mode</Text>
                <ThemeSwitchButton />
            </View>
        </View>
    );
}