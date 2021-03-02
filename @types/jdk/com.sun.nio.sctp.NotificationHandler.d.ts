declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        interface NotificationHandler$$lambda<T> {
          (arg0: com.sun.nio.sctp.Notification, arg1: T): com.sun.nio.sctp.HandlerResult
        }

        interface NotificationHandler<T> {
          handleNotification(arg0: com.sun.nio.sctp.Notification, arg1: T): com.sun.nio.sctp.HandlerResult
        }

      }
    }
  }
}
