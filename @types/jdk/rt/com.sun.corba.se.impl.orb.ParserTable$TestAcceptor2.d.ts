declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
                        class ParserTable$TestAcceptor2 implements com.sun.corba.se.pept.transport.Acceptor {
                            public constructor()
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public initialize(): boolean
                            public initialized(): boolean
                            public getConnectionCacheType(): string
                            public setConnectionCache(arg0: com.sun.corba.se.pept.transport.InboundConnectionCache): void
                            public getConnectionCache(): com.sun.corba.se.pept.transport.InboundConnectionCache
                            public shouldRegisterAcceptEvent(): boolean
                            public setUseSelectThreadForConnections(arg0: boolean): void
                            public shouldUseSelectThreadForConnections(): boolean
                            public setUseWorkerThreadForConnections(arg0: boolean): void
                            public shouldUseWorkerThreadForConnections(): boolean
                            public accept(): void
                            public close(): void
                            public getEventHandler(): com.sun.corba.se.pept.transport.EventHandler
                            public createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection): com.sun.corba.se.pept.protocol.MessageMediator
                            public finishCreatingMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.protocol.MessageMediator
                            public createInputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            public createOutputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}