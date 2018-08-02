declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace protocol {
                        interface MessageMediator {
                            getBroker(): com.sun.corba.se.pept.broker.Broker
                            getContactInfo(): com.sun.corba.se.pept.transport.ContactInfo
                            getConnection(): com.sun.corba.se.pept.transport.Connection
                            initializeMessage(): void
                            finishSendingRequest(): void
                            waitForResponse(): com.sun.corba.se.pept.encoding.InputObject
                            setOutputObject(arg0: com.sun.corba.se.pept.encoding.OutputObject): void
                            getOutputObject(): com.sun.corba.se.pept.encoding.OutputObject
                            setInputObject(arg0: com.sun.corba.se.pept.encoding.InputObject): void
                            getInputObject(): com.sun.corba.se.pept.encoding.InputObject
                        }
                    }
                }
            }
        }
    }
}