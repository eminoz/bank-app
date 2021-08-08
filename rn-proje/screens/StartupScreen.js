import React, {useEffect} from "react";
import {
    ActivityIndicator,
    View,
    AsyncStorage,
    StyleSheet,
} from "react-native";
import Colors from "./../contants/Color";
import {useDispatch} from "react-redux";
import * as authAction from "../store/actions/auth";

const StartupScreen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem("userData");
            if (!userData) {
                props.navigation.navigate("Auth");
                return;
            }
            const transformedData = await JSON.parse(userData);
            const {token, userId} = transformedData;
            props.navigation.navigate("Home");
            dispatch(authAction.authenticate(token, userId));
        };
        tryLogin()
    }, [dispatch]);
    return (
        <View style={styles.screen}>
            <ActivityIndicator color={Colors.tweeterColor} size="large"/>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default StartupScreen;
