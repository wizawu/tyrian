declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
                        class ServerRequestImpl extends org.omg.CORBA.ServerRequest {
                            public constructor(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.orb.ORB)
                            public operation(): string
                            public arguments(arg0: org.omg.CORBA.NVList): void
                            public set_result(arg0: org.omg.CORBA.Any): void
                            public set_exception(arg0: org.omg.CORBA.Any): void
                            public checkResultCalled(): org.omg.CORBA.Any
                            public marshalReplyParams(arg0: org.omg.CORBA.portable.OutputStream): void
                            public ctx(): org.omg.CORBA.Context
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}