declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class RMIConnector$RMINotifClient extends com.sun.jmx.remote.internal.ClientNotifForwarder {
                    public constructor(arg0: java.lang.ClassLoader, arg1: java.util.Map<java.lang.String, any>)
                    protected fetchNotifs(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                    protected addListenerForMBeanRemovedNotif(): java.lang.Integer
                    protected removeListenerForMBeanRemovedNotif(arg0: java.lang.Integer): void
                    protected lostNotifs(arg0: java.lang.String | string, arg1: long): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}