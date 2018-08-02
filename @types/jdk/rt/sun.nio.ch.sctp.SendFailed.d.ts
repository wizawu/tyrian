declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
                class SendFailed extends com.sun.nio.sctp.SendFailedNotification implements sun.nio.ch.sctp.SctpNotification {
                    public assocId(): int
                    public setAssociation(arg0: com.sun.nio.sctp.Association): void
                    public association(): com.sun.nio.sctp.Association
                    public address(): java.net.SocketAddress
                    public buffer(): java.nio.ByteBuffer
                    public errorCode(): int
                    public streamNumber(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}