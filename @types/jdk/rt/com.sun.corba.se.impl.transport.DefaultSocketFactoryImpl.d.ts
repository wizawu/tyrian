declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class DefaultSocketFactoryImpl implements com.sun.corba.se.spi.transport.ORBSocketFactory {
    public constructor()
    public setORB(arg0: com.sun.corba.se.spi.orb.ORB): void
    public createServerSocket(arg0: java.lang.String | string, arg1: java.net.InetSocketAddress): java.net.ServerSocket
    public createSocket(arg0: java.lang.String | string, arg1: java.net.InetSocketAddress): java.net.Socket
    public setAcceptedSocketOptions(arg0: com.sun.corba.se.pept.transport.Acceptor, arg1: java.net.ServerSocket, arg2: java.net.Socket): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}