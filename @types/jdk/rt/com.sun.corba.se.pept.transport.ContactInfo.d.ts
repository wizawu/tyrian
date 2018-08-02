declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface ContactInfo {
                            getBroker(): com.sun.corba.se.pept.broker.Broker
                            getContactInfoList(): com.sun.corba.se.pept.transport.ContactInfoList
                            getClientRequestDispatcher(): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
                            isConnectionBased(): boolean
                            shouldCacheConnection(): boolean
                            getConnectionCacheType(): string
                            setConnectionCache(arg0: com.sun.corba.se.pept.transport.OutboundConnectionCache): void
                            getConnectionCache(): com.sun.corba.se.pept.transport.OutboundConnectionCache
                            createConnection(): com.sun.corba.se.pept.transport.Connection
                            createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: com.sun.corba.se.pept.transport.Connection, arg3: java.lang.String | string, arg4: boolean): com.sun.corba.se.pept.protocol.MessageMediator
                            createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection): com.sun.corba.se.pept.protocol.MessageMediator
                            finishCreatingMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.protocol.MessageMediator
                            createInputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            createOutputObject(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
                            hashCode(): int
                        }
                    }
                }
            }
        }
    }
}