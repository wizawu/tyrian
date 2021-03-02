declare namespace java {
  namespace nio {
    namespace channels {

      abstract class MembershipKey {
        protected constructor()
        public abstract isValid(): boolean
        public abstract drop(): void
        public abstract block(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
        public abstract unblock(arg0: java.net.InetAddress): java.nio.channels.MembershipKey
        public abstract channel(): java.nio.channels.MulticastChannel
        public abstract group(): java.net.InetAddress
        public abstract networkInterface(): java.net.NetworkInterface
        public abstract sourceAddress(): java.net.InetAddress
      }

    }
  }
}
