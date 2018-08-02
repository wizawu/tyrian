declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace protocol {
interface ClientDelegate {
    getBroker(): com.sun.corba.se.pept.broker.Broker
    getContactInfoList(): com.sun.corba.se.pept.transport.ContactInfoList
}

                    }
                }
            }
        }
    }
}