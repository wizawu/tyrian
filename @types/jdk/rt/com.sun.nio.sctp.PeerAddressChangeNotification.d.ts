declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class PeerAddressChangeNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public abstract address(): java.net.SocketAddress
                    public abstract association(): com.sun.nio.sctp.Association
                    public abstract event(): com.sun.nio.sctp.PeerAddressChangeNotification$AddressChangeEvent
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}