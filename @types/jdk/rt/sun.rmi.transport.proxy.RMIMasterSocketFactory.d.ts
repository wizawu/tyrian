declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                class RMIMasterSocketFactory extends java.rmi.server.RMISocketFactory {
                    protected initialFactory: java.rmi.server.RMISocketFactory
                    protected altFactoryList: java.util.Vector<java.rmi.server.RMISocketFactory>
                    public constructor()
                    public createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
                    public createServerSocket(arg0: int): java.net.ServerSocket
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}