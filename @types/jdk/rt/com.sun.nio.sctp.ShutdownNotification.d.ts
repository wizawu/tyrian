declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class ShutdownNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public abstract association(): com.sun.nio.sctp.Association
                    public static class: java.lang.Class<any>
                }
                interface ShutdownNotification$$Lambda implements com.sun.nio.sctp.Notification {
                    (): com.sun.nio.sctp.Association
                }
            }
        }
    }
}