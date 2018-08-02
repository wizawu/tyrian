declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
class AbstractNotificationHandler<T> implements com.sun.nio.sctp.NotificationHandler<T> {
    protected constructor()
    public handleNotification(arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
    public handleNotification(arg0: com.sun.nio.sctp.AssociationChangeNotification | com.sun.nio.sctp.AssociationChangeNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
    public handleNotification(arg0: com.sun.nio.sctp.PeerAddressChangeNotification | com.sun.nio.sctp.PeerAddressChangeNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
    public handleNotification(arg0: com.sun.nio.sctp.SendFailedNotification | com.sun.nio.sctp.SendFailedNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
    public handleNotification(arg0: com.sun.nio.sctp.ShutdownNotification | com.sun.nio.sctp.ShutdownNotification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
    public static class: java.lang.Class<any>
}

            }
        }
    }
}