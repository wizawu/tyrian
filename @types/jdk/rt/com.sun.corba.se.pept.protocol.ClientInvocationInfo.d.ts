declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace protocol {
interface ClientInvocationInfo {
    getContactInfoListIterator(): java.util.Iterator
    setContactInfoListIterator(arg0: java.util.Iterator): void
    isRetryInvocation(): boolean
    setIsRetryInvocation(arg0: boolean): void
    getEntryCount(): int
    incrementEntryCount(): void
    decrementEntryCount(): void
    setClientRequestDispatcher(arg0: com.sun.corba.se.pept.protocol.ClientRequestDispatcher): void
    getClientRequestDispatcher(): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
    setMessageMediator(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    getMessageMediator(): com.sun.corba.se.pept.protocol.MessageMediator
}

                    }
                }
            }
        }
    }
}