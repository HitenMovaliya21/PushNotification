import PushNotification from "react-native-push-notification";

export const LocalNotification = (item) => {
    console.log("item",item)
    PushNotification.localNotification({
      autoCancel: true,
      bigText:
        'This is local notification demo in React Native app.',
      subText: 'Local Notification Demo',
      title: item.title,
      message: item.message,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]',
      channelId: 'fcm_fallback_notification_channel',
    })
  }