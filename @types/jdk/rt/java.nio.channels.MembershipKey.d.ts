declare namespace java {
    namespace nio {
        namespace channels {
abstract class MembershipKey {
    protected constructor()
    public isValid(): boolean
    public drop(): void
    public block(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
    public unblock(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
    public channel(): java.nio.channels.MulticastChannel
    public group(): java.net.InetAddress
    public networkInterface(): java.net.NetworkInterface
    public sourceAddress(): java.net.InetAddress
    public static class: java.lang.Class<any>
}

        }
    }
}