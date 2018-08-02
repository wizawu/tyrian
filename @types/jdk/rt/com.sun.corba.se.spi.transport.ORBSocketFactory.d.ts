declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface ORBSocketFactory {
    setORB(arg0: com.sun.corba.se.spi.orb.ORB): void
    createServerSocket(arg0: java.lang.String | string, arg1: java.net.InetSocketAddress): java.net.ServerSocket
    createSocket(arg0: java.lang.String | string, arg1: java.net.InetSocketAddress): java.net.Socket
    setAcceptedSocketOptions(arg0: com.sun.corba.se.pept.transport.Acceptor, arg1: java.net.ServerSocket, arg2: java.net.Socket): void
}

                    }
                }
            }
        }
    }
}