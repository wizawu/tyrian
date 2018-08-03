declare namespace java {
    namespace rmi {
        namespace server {
            abstract class RMISocketFactory implements java.rmi.server.RMIClientSocketFactory , java.rmi.server.RMIServerSocketFactory {
                public constructor()
                public createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
                public createServerSocket(arg0: int): java.net.ServerSocket
                public static setSocketFactory(arg0: java.rmi.server.RMISocketFactory): void
                public static getSocketFactory(): java.rmi.server.RMISocketFactory
                public static getDefaultSocketFactory(): java.rmi.server.RMISocketFactory
                public static setFailureHandler(arg0: java.rmi.server.RMIFailureHandler | java.rmi.server.RMIFailureHandler$$Lambda): void
                public static getFailureHandler(): java.rmi.server.RMIFailureHandler
                public static class: java.lang.Class<any>
            }
        }
    }
}