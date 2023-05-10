import React, { Fragment } from 'react';
import PushController from './src/PushController';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { LocalNotification } from './src/LocalPushController'
import { Header, Colors, } from 'react-native/Libraries/NewAppScreen';

let pushData = [
    {
        title: "First push",
        message: "First push message"
    },
    {
        title: "Second push",
        message: "Second push message"
    }
]

const App = () => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                LocalNotification(item)
            }}>
                <View key={item.title}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Header />
                <View style={styles.listHeader}>
                    <Text>Push Notifications</Text>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={pushData}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item) => item.title}
                    />
                </View>
            </SafeAreaView>
            <PushController />
        </Fragment>
    );
};

const styles = StyleSheet.create({
    listHeader: { backgroundColor: '#eee', color: "#222", height: 44, padding: 12 },
    title: { fontSize: 18, fontWeight: 'bold', paddingTop: 10 },
    message: { fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1 },
    body: { backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10, },
});

export default App;