declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace legacy {
                        namespace connection {
                            interface ORBSocketFactory {
                                IIOP_CLEAR_TEXT: string
                                createServerSocket(arg0: java.lang.String | string, arg1: int): java.net.ServerSocket
                                getEndPointInfo(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.spi.ior.IOR, arg2: com.sun.corba.se.spi.transport.SocketInfo): com.sun.corba.se.spi.transport.SocketInfo
                                createSocket(arg0: com.sun.corba.se.spi.transport.SocketInfo): java.net.Socket
                            }
                        }
                    }
                }
            }
        }
    }
}