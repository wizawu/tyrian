declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    abstract class ClientNotifForwarder {
                        public constructor(arg0: java.util.Map)
                        public constructor(arg0: java.lang.ClassLoader, arg1: java.util.Map<java.lang.String, any>)
                        protected fetchNotifs(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                        protected addListenerForMBeanRemovedNotif(): java.lang.Integer
                        protected removeListenerForMBeanRemovedNotif(arg0: java.lang.Integer): void
                        protected lostNotifs(arg0: java.lang.String | string, arg1: long): void
                        public addNotificationListener(arg0: java.lang.Integer, arg1: javax.management.ObjectName, arg2: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg3: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg4: java.lang.Object, arg5: javax.security.auth.Subject): void
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): java.lang.Integer[]
                        public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): java.lang.Integer
                        public removeNotificationListener(arg0: javax.management.ObjectName): java.lang.Integer[]
                        public preReconnection(): com.sun.jmx.remote.internal.ClientListenerInfo[]
                        public postReconnection(arg0: com.sun.jmx.remote.internal.ClientListenerInfo[]): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}