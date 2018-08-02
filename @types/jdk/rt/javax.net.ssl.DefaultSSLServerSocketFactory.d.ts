declare namespace javax {
    namespace net {
        namespace ssl {
            class DefaultSSLServerSocketFactory extends javax.net.ssl.SSLServerSocketFactory {
                public createServerSocket(): java.net.ServerSocket
                public createServerSocket(arg0: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int, arg2: java.net.InetAddress): java.net.ServerSocket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}