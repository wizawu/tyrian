declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        class CorbaInvocationInfo implements com.sun.corba.se.pept.protocol.ClientInvocationInfo {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public getContactInfoListIterator(): java.util.Iterator
                            public setContactInfoListIterator(arg0: java.util.Iterator): void
                            public isRetryInvocation(): boolean
                            public setIsRetryInvocation(arg0: boolean): void
                            public getEntryCount(): int
                            public incrementEntryCount(): void
                            public decrementEntryCount(): void
                            public setClientRequestDispatcher(arg0: com.sun.corba.se.pept.protocol.ClientRequestDispatcher): void
                            public getClientRequestDispatcher(): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
                            public setMessageMediator(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public getMessageMediator(): com.sun.corba.se.pept.protocol.MessageMediator
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}