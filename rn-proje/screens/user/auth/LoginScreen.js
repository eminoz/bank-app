import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import {useDispatch} from "react-redux";
import * as authAction from "../../../store/actions/auth";
import Color from "../../../contants/Color";

const LoginScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const loginUser = async () => {
        try {
            await dispatch(authAction.login(email, password));
            await props.navigation.navigate("Home");
        } catch (err) {
            throw err;
        }
    };
    return (
        <View style={(styles.screen, styles.gradient, styles.authContainer)}>
            <Input
                id="email"
                label="Email"
                keyboardType="email-address"
                required
                email
                value={email}
                autoCapitalize="none"
                onChangeText={(value) => {
                    setEmail(value);
                }}
            />

            <Input
                id="password"
                label="Password"
                keyboardType="default"
                password
                required
                value={password}
                initialValue=""
                autoCapitalize="none"
                onChangeText={(value) => {
                    setPassword(value);
                }}
                secureTextEntry={true}
            />
            <Button style={styles.button} title="Login" onPress={loginUser}/>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    authContainer: {
        width: "100%",
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,
    },
    button: {
        backgroundColor: Color.tweeterColor,

        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        marginLeft: 10,
    },
});
export default LoginScreen;
