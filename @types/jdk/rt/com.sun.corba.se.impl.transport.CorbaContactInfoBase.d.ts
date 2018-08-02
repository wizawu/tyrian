declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        abstract class CorbaContactInfoBase implements com.sun.corba.se.spi.transport.CorbaContactInfo {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            protected contactInfoList: com.sun.corba.se.spi.transport.CorbaContactInfoList
                            protected effectiveTargetIOR: com.sun.corba.se.spi.ior.IOR
                            protected addressingDisposition: short
                            protected connectionCache: com.sun.corba.se.pept.transport.OutboundConnectionCache
                            public constructor()
                            public getBroker(): com.sun.corba.se.pept.broker.Broker
                            public getContactInfoList(): com.sun.corba.se.pept.transport.ContactInfoList
                            public getClientRequestDispatcher(): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
                            public setConnectionCache(arg0: com.sun.corba.se.pept.transport.OutboundConnectionCache): void
                            public getConnectionCache(): com.sun.corba.se.pept.transport.OutboundConnectionCache
                            public createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: com.sun.corba.se.pept.transport.Connection, arg3: java.lang.String | string, arg4: boolean): com.sun.corba.se.pept.protocol.MessageMediator
                            public createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection): com.sun.corba.se.pept.protocol.MessageMediator
                            public finishCreatingMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.protocol.MessageMediator
                            public createOutputObject(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
                            public createInputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            public getAddressingDisposition(): short
                            public setAddressingDisposition(arg0: short): void
                            public getTargetIOR(): com.sun.corba.se.spi.ior.IOR
                            public getEffectiveTargetIOR(): com.sun.corba.se.spi.ior.IOR
                            public getEffectiveProfile(): com.sun.corba.se.spi.ior.iiop.IIOPProfile
                            public toString(): string
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}