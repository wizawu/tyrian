declare namespace javax {
  namespace management {
    namespace timer {
      interface TimerMBean {
        start(): void
        stop(): void
        addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long,
          arg5: number | java.lang.Long,
          arg6: boolean | java.lang.Boolean
        ): number
        addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long,
          arg5: number | java.lang.Long
        ): number
        addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long
        ): number
        addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date
        ): number
        removeNotification(arg0: number | java.lang.Integer): void
        removeNotifications(arg0: java.lang.String | string): void
        removeAllNotifications(): void
        getNbNotifications(): number
        getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
        getNotificationIDs(arg0: java.lang.String | string): java.util.Vector<java.lang.Integer>
        getNotificationType(arg0: number | java.lang.Integer): java.lang.String
        getNotificationMessage(arg0: number | java.lang.Integer): java.lang.String
        getNotificationUserData(arg0: number | java.lang.Integer): java.lang.Object
        getDate(arg0: number | java.lang.Integer): java.util.Date
        getPeriod(arg0: number | java.lang.Integer): number
        getNbOccurences(arg0: number | java.lang.Integer): number
        getFixedRate(arg0: number | java.lang.Integer): boolean
        getSendPastNotifications(): boolean
        setSendPastNotifications(arg0: boolean | java.lang.Boolean): void
        isActive(): boolean
        isEmpty(): boolean
      }
    }
  }
}
