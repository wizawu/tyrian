declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        abstract class SpecialMethod {
                            public constructor()
                            public abstract isNonExistentMethod(): boolean
                            public abstract getName(): string
                            public abstract invoke(arg0: java.lang.Object, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg2: byte[], arg3: com.sun.corba.se.spi.oa.ObjectAdapter): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            public static getSpecialMethod(arg0: java.lang.String | string): com.sun.corba.se.impl.protocol.SpecialMethod
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}