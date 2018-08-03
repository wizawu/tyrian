declare namespace sun {
    namespace net {
        abstract class NetHooks$Provider {
            protected constructor()
            public abstract implBeforeTcpBind(arg0: java.io.FileDescriptor, arg1: java.net.InetAddress, arg2: int): void
            public abstract implBeforeTcpConnect(arg0: java.io.FileDescriptor, arg1: java.net.InetAddress, arg2: int): void
            public static class: java.lang.Class<any>
        }
    }
}