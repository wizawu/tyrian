declare namespace sun {
    namespace nio {
        namespace ch {
            class MembershipKeyImpl extends java.nio.channels.MembershipKey {
                public isValid(): boolean
                public drop(): void
                public channel(): java.nio.channels.MulticastChannel
                public group(): java.net.InetAddress
                public networkInterface(): java.net.NetworkInterface
                public sourceAddress(): java.net.InetAddress
                public block(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
                public unblock(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}