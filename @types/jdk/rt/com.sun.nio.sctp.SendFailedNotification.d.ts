declare namespace com {
    namespace sun {
        namespace nio {
            namespace sctp {
                abstract class SendFailedNotification implements com.sun.nio.sctp.Notification {
                    protected constructor()
                    public association(): com.sun.nio.sctp.Association
                    public address(): java.net.SocketAddress
                    public buffer(): java.nio.ByteBuffer
                    public errorCode(): int
                    public streamNumber(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}