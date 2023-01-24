declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {
        interface NotificationHandler$$lambda<T> {
          (
            arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$lambda,
            arg1: T
          ): com.sun.nio.sctp.HandlerResult
        }

        interface NotificationHandler<T> {
          handleNotification(
            arg0: com.sun.nio.sctp.Notification | com.sun.nio.sctp.Notification$$lambda,
            arg1: T
          ): com.sun.nio.sctp.HandlerResult
        }
      }
    }
  }
}
