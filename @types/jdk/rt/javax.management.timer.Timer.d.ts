declare namespace javax {
    namespace management {
        namespace timer {
            class Timer extends javax.management.NotificationBroadcasterSupport implements javax.management.timer.TimerMBean , javax.management.MBeanRegistration {
                public static readonly ONE_SECOND: long
                public static readonly ONE_MINUTE: long
                public static readonly ONE_HOUR: long
                public static readonly ONE_DAY: long
                public static readonly ONE_WEEK: long
                public constructor()
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public start(): void
                public stop(): void
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long, arg6: boolean): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long, arg5: long): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date, arg4: long): java.lang.Integer
                public addNotification(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.util.Date): java.lang.Integer
                public removeNotification(arg0: java.lang.Integer): void
                public removeNotifications(arg0: java.lang.String | string): void
                public removeAllNotifications(): void
                public getNbNotifications(): int
                public getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
                public getNotificationIDs(arg0: java.lang.String | string): java.util.Vector<java.lang.Integer>
                public getNotificationType(arg0: java.lang.Integer): string
                public getNotificationMessage(arg0: java.lang.Integer): string
                public getNotificationUserData(arg0: java.lang.Integer): java.lang.Object
                public getDate(arg0: java.lang.Integer): java.util.Date
                public getPeriod(arg0: java.lang.Integer): java.lang.Long
                public getNbOccurences(arg0: java.lang.Integer): java.lang.Long
                public getFixedRate(arg0: java.lang.Integer): boolean
                public getSendPastNotifications(): boolean
                public setSendPastNotifications(arg0: boolean): void
                public isActive(): boolean
                public isEmpty(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}