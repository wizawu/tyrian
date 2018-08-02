declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        class CorbaServerRequestDispatcherImpl implements com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public locate(arg0: com.sun.corba.se.spi.ior.ObjectKey): com.sun.corba.se.spi.ior.IOR
                            public dispatch(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            protected getServantWithPI(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.oa.ObjectAdapter, arg2: byte[], arg3: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg4: java.lang.String | string): java.lang.Object
                            protected checkServerId(arg0: com.sun.corba.se.spi.ior.ObjectKey): void
                            protected handleNullServant(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.oa.NullServant | com.sun.corba.se.spi.oa.NullServant$$Lambda): void
                            protected consumeServiceContexts(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected dispatchToServant(arg0: java.lang.Object, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg2: byte[], arg3: com.sun.corba.se.spi.oa.ObjectAdapter): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected handleDynamicResult(arg0: com.sun.corba.se.impl.corba.ServerRequestImpl, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected sendingReply(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected sendingReply(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: org.omg.CORBA.Any): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected processCodeSetContext(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): boolean
                            protected dprint(arg0: java.lang.String | string): void
                            protected opAndId(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}