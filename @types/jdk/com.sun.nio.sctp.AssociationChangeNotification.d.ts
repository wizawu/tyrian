declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        abstract class AssociationChangeNotification implements com.sun.nio.sctp.Notification {

          protected constructor()
          public abstract association(): com.sun.nio.sctp.Association
          public abstract event(): com.sun.nio.sctp.AssociationChangeNotification$AssocChangeEvent
        }

      }
    }
  }
}
