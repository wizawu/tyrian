declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace protocol {
                        interface ClientRequestDispatcher {
                            beginRequest(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: boolean, arg3: com.sun.corba.se.pept.transport.ContactInfo): com.sun.corba.se.pept.encoding.OutputObject
                            marshalingComplete(arg0: java.lang.Object, arg1: com.sun.corba.se.pept.encoding.OutputObject): com.sun.corba.se.pept.encoding.InputObject
                            endRequest(arg0: com.sun.corba.se.pept.broker.Broker, arg1: java.lang.Object, arg2: com.sun.corba.se.pept.encoding.InputObject): void
                        }
                    }
                }
            }
        }
    }
}