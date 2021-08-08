import React, {useCallback, useEffect, useState} from "react";
import {View, Button, StyleSheet, Text} from "react-native";
import {useDispatch} from "react-redux";
import * as authActions from "../../store/actions/auth";
import {AsyncStorage} from "react-native";
import {useSelector} from "react-redux";
import * as userActions from "../../store/actions/user";
import Colors from "../../contants/Color";
import Card from "../../components/UI/Card";
import {FlatList} from "react-native-gesture-handler";

const HomePage = (props) => {
    const user = useSelector((state) => state.user.avaibleUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.fetchUser());
    }, [dispatch]);

    console.log(user)
    return (
        <View style={styles.main}>
            <FlatList
                data={user}
                keyExtractor={(item) => item.id}
                renderItem={(itemUser) => {
                    console.log("user status" + itemUser.status);
                }}
            />
            <View>
                <Button
                    title="Logout"
                    color={Colors.primaryColor}
                    onPress={() => {
                        dispatch(authActions.logout());
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cardSummury: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 20,
    },
});
export default HomePage;
