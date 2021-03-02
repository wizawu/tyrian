declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        class AbstractNotificationHandler<T> implements com.sun.nio.sctp.NotificationHandler<T> {
          protected constructor()
          public handleNotification(arg0: com.sun.nio.sctp.Notification, arg1: T): com.sun.nio.sctp.HandlerResult
          public handleNotification(arg0: com.sun.nio.sctp.AssociationChangeNotification, arg1: T): com.sun.nio.sctp.HandlerResult
          public handleNotification(arg0: com.sun.nio.sctp.PeerAddressChangeNotification, arg1: T): com.sun.nio.sctp.HandlerResult
          public handleNotification(arg0: com.sun.nio.sctp.SendFailedNotification, arg1: T): com.sun.nio.sctp.HandlerResult
          public handleNotification(arg0: com.sun.nio.sctp.ShutdownNotification, arg1: T): com.sun.nio.sctp.HandlerResult
        }

      }
    }
  }
}
