declare namespace javax {
    namespace management {
        class NotificationFilterSupport implements javax.management.NotificationFilter {
            public constructor()
            public isNotificationEnabled(arg0: javax.management.Notification): boolean
            public enableType(arg0: java.lang.String | string): void
            public disableType(arg0: java.lang.String | string): void
            public disableAllTypes(): void
            public getEnabledTypes(): java.util.Vector<java.lang.String>
            public static class: java.lang.Class<any>
        }
    }
}