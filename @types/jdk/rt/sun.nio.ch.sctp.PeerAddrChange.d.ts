declare namespace sun {
    namespace nio {
        namespace ch {
            namespace sctp {
                class PeerAddrChange extends com.sun.nio.sctp.PeerAddressChangeNotification implements sun.nio.ch.sctp.SctpNotification {
                    public assocId(): int
                    public setAssociation(arg0: com.sun.nio.sctp.Association): void
                    public address(): java.net.SocketAddress
                    public association(): com.sun.nio.sctp.Association
                    public event(): com.sun.nio.sctp.PeerAddressChangeNotification$AddressChangeEvent
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}