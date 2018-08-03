declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class AssociationChangeNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public association(): com.sun.nio.sctp.Association
                    public event(): com.sun.nio.sctp.AssociationChangeNotification$AssocChangeEvent
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}