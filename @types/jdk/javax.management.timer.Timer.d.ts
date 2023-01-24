declare namespace javax {
  namespace management {
    namespace timer {
      class Timer
        extends javax.management.NotificationBroadcasterSupport
        implements javax.management.timer.TimerMBean, javax.management.MBeanRegistration
      {
        public static readonly ONE_SECOND: long
        public static readonly ONE_MINUTE: long
        public static readonly ONE_HOUR: long
        public static readonly ONE_DAY: long
        public static readonly ONE_WEEK: long
        public constructor()
        public preRegister(
          arg0: javax.management.MBeanServer,
          arg1: javax.management.ObjectName
        ): javax.management.ObjectName
        public postRegister(arg0: boolean | java.lang.Boolean): void
        public preDeregister(): void
        public postDeregister(): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        public start(): void
        public stop(): void
        public addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long,
          arg5: number | java.lang.Long,
          arg6: boolean | java.lang.Boolean
        ): number
        public addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long,
          arg5: number | java.lang.Long
        ): number
        public addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date,
          arg4: number | java.lang.Long
        ): number
        public addNotification(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any,
          arg3: java.util.Date
        ): number
        public removeNotification(arg0: number | java.lang.Integer): void
        public removeNotifications(arg0: java.lang.String | string): void
        public removeAllNotifications(): void
        public getNbNotifications(): number
        public getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
        public getNotificationIDs(arg0: java.lang.String | string): java.util.Vector<java.lang.Integer>
        public getNotificationType(arg0: number | java.lang.Integer): java.lang.String
        public getNotificationMessage(arg0: number | java.lang.Integer): java.lang.String
        public getNotificationUserData(arg0: number | java.lang.Integer): java.lang.Object
        public getDate(arg0: number | java.lang.Integer): java.util.Date
        public getPeriod(arg0: number | java.lang.Integer): number
        public getNbOccurences(arg0: number | java.lang.Integer): number
        public getFixedRate(arg0: number | java.lang.Integer): boolean
        public getSendPastNotifications(): boolean
        public setSendPastNotifications(arg0: boolean | java.lang.Boolean): void
        public isActive(): boolean
        public isEmpty(): boolean
        notifyAlarmClock(arg0: javax.management.timer.TimerAlarmClockNotification): void
        sendNotification(arg0: java.util.Date, arg1: javax.management.timer.TimerNotification): void
      }
    }
  }
}
