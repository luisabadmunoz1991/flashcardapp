import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { NOTIFICATION_KEY } from './api'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export const setLocalNotification =  () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(18)
              tomorrow.setMinutes(30)

              Notifications.scheduleLocalNotificationAsync(
                {
                  title: 'QUIZ TIME',
                  body: " don't forget  complete just one quiz for today!",
                  ios: {
                    sound: true,
                  },
                  android: {
                    sound: true,
                    priority: 'high',
                    sticky: false,
                    vibrate: true,
                  }
                },
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
