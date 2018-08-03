declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
                        interface IORTransformer {
                            unmarshal(arg0: com.sun.corba.se.spi.encoding.CorbaInputObject): com.sun.corba.se.spi.ior.IOR
                            marshal(arg0: com.sun.corba.se.spi.encoding.CorbaOutputObject | com.sun.corba.se.spi.encoding.CorbaOutputObject$$Lambda, arg1: com.sun.corba.se.spi.ior.IOR): void
                        }
                    }
                }
            }
        }
    }
}