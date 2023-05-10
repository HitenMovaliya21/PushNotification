import React, { Component } from "react";
import PushNotification from "react-native-push-notification";

export default class PushController extends Component {

    componentDidMount() {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: async function (token) {
                console.log("TOKEN:", token);
                PushNotification.createChannel(
                    {
                        channelId: 'fcm_fallback_notification_channel', // (required)
                        channelName: 'My channel',
                        channelDescription: "Notification for special message", // (optional) default: undefined.
                        importance: 4, // (optional) default: 4. Int value of the Android notification importance
                        vibrate: true,// (optional) default: true. Creates the default vibration patten if true.
                        soundName: "default",
                        // foreground: false
                    },
                    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
                );
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                // process the notification here
                if (notification.foreground) {
                    PushNotification.localNotification({
                        title: notification.title,
                        message: notification.message,
                        autoCancel: true,
                        vibrate: true,
                        vibration: 300,
                        playSound: true,
                        soundName: 'default',
                        actions: '["Yes", "No"]',
                        channelId: 'fcm_fallback_notification_channel',
                    });
                }
                // required on iOS only 
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);

                // process the action
            },
            // Android only
            senderID: "508069925896",
            // iOS only
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
        });
    }

    render() {
        return <></>;
    }
}