declare namespace jdk {
    namespace net {
        class ExtendedSocketOptions {
            public static SO_FLOW_SLA: java.net.SocketOption<jdk.net.SocketFlow>
            public static class: java.lang.Class<any>
        }
        class NetworkPermission extends java.security.BasicPermission {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class SocketFlow {
            public static NORMAL_PRIORITY: int
            public static HIGH_PRIORITY: int
            public static create(): jdk.net.SocketFlow
            public priority(arg0: int): jdk.net.SocketFlow
            public bandwidth(arg0: long): jdk.net.SocketFlow
            public priority(): int
            public bandwidth(): long
            public status(): jdk.net.SocketFlow$Status
            public static class: java.lang.Class<any>
        }
        class Sockets {
            public static setOption<T>(arg0: java.net.Socket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.Socket, arg1: java.net.SocketOption<T>): T
            public static setOption<T>(arg0: java.net.ServerSocket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.ServerSocket, arg1: java.net.SocketOption<T>): T
            public static setOption<T>(arg0: java.net.DatagramSocket, arg1: java.net.SocketOption<T>, arg2: T): void
            public static getOption<T>(arg0: java.net.DatagramSocket, arg1: java.net.SocketOption<T>): T
            public static supportedOptions(arg0: java.lang.Class<any>): java.util.Set<java.net.SocketOption<any>>
            public static class: java.lang.Class<any>
        }
    }
}
