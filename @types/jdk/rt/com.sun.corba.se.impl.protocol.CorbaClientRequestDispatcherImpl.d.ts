declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        class CorbaClientRequestDispatcherImpl implements com.sun.corba.se.pept.protocol.ClientRequestDispatcher {
                            public constructor()
                            public beginRequest(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: boolean, arg3: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.encoding.OutputObject
                            public marshalingComplete(arg0: java.lang.Object, arg1: com.sun.corba.se.pept.encoding.OutputObject): com.sun.corba.se.pept.encoding.InputObject
                            public marshalingComplete1(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            protected processResponse(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg2: com.sun.corba.se.pept.encoding.InputObject): com.sun.corba.se.pept.encoding.InputObject
                            protected continueOrThrowSystemOrRemarshal(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: java.lang.Exception): void
                            protected getContactInfoListIterator(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.transport.CorbaContactInfoListIterator
                            protected registerWaiter(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected unregisterWaiter(arg0: com.sun.corba.se.spi.orb.ORB): void
                            protected addServiceContexts(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected consumeServiceContexts(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected getExceptionDetailMessage(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.impl.logging.ORBUtilSystemException): void
                            public endRequest(arg0: com.sun.corba.se.pept.broker.Broker, arg1: java.lang.Object, arg2: com.sun.corba.se.pept.encoding.InputObject): void
                            protected performCodeSetNegotiation(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected addCodeSetServiceContext(arg0: com.sun.corba.se.spi.transport.CorbaConnection, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg2: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
                            protected peekUserExceptionId(arg0: com.sun.corba.se.pept.encoding.InputObject): string
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