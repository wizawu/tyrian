declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace legacy {
                        namespace connection {
                            class DefaultSocketFactory implements com.sun.corba.se.spi.legacy.connection.ORBSocketFactory {
                                public constructor()
                                public setORB(arg0: com.sun.corba.se.spi.orb.ORB): void
                                public createServerSocket(arg0: java.lang.String | string, arg1: int): java.net.ServerSocket
                                public getEndPointInfo(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.spi.ior.IOR, arg2: com.sun.corba.se.spi.transport.SocketInfo): com.sun.corba.se.spi.transport.SocketInfo
                                public createSocket(arg0: com.sun.corba.se.spi.transport.SocketInfo): java.net.Socket
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}