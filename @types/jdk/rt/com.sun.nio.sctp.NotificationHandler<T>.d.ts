declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
interface NotificationHandler<T> {
    handleNotification(arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
}

interface NotificationHandler$$Lambda<T> {
    (arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$Lambda, arg1: T): com.sun.nio.sctp.HandlerResult
}

            }
        }
    }
}