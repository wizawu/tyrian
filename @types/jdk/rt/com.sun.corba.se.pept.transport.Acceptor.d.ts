declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface Acceptor {
                            initialize(): boolean
                            initialized(): boolean
                            getConnectionCacheType(): string
                            setConnectionCache(arg0: com.sun.corba.se.pept.transport.InboundConnectionCache): void
                            getConnectionCache(): com.sun.corba.se.pept.transport.InboundConnectionCache
                            shouldRegisterAcceptEvent(): boolean
                            accept(): void
                            close(): void
                            getEventHandler(): com.sun.corba.se.pept.transport.EventHandler
                            createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection): com.sun.corba.se.pept.protocol.MessageMediator
                            finishCreatingMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.protocol.MessageMediator
                            createInputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            createOutputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
                        }
                    }
                }
            }
        }
    }
}