declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    class ClientListenerInfo {
                        public constructor(arg0: java.lang.Integer, arg1: javax.management.ObjectName, arg2: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg3: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg4: java.lang.Object, arg5: javax.security.auth.Subject)
                        public getObjectName(): javax.management.ObjectName
                        public getListenerID(): java.lang.Integer
                        public getNotificationFilter(): javax.management.NotificationFilter
                        public getListener(): javax.management.NotificationListener
                        public getHandback(): java.lang.Object
                        public getDelegationSubject(): javax.security.auth.Subject
                        public sameAs(arg0: javax.management.ObjectName): boolean
                        public sameAs(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): boolean
                        public sameAs(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg2: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg3: java.lang.Object): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}