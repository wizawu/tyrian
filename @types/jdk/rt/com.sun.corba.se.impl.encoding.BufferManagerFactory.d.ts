declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class BufferManagerFactory {
                            public static readonly GROW: int
                            public static readonly COLLECT: int
                            public static readonly STREAM: int
                            public constructor()
                            public static newBufferManagerRead(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: byte, arg2: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.BufferManagerRead
                            public static newBufferManagerRead(arg0: int, arg1: byte, arg2: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.BufferManagerRead
                            public static newBufferManagerWrite(arg0: int, arg1: byte, arg2: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.BufferManagerWrite
                            public static newBufferManagerWrite(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: byte, arg2: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.BufferManagerWrite
                            public static defaultBufferManagerRead(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.impl.encoding.BufferManagerRead
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}