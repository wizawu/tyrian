declare namespace java {
  namespace nio {
    namespace channels {

      interface MulticastChannel extends java.nio.channels.NetworkChannel {

        close(): void
        join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface): java.nio.channels.MembershipKey
        join(arg0: java.net.InetAddress, arg1: java.net.NetworkInterface, arg2: java.net.InetAddress): java.nio.channels.MembershipKey
      }

    }
  }
}
