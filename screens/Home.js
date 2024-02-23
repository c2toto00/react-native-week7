import { View, Text } from "react-native";
import React from "react";
import Styles from "../Styles";
import { useTheme } from "../context/useTheme";

export default function Home(){
    const { isDarkMode } = useTheme()

    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light ]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>This is home screen</Text>
        </View>
    );
}