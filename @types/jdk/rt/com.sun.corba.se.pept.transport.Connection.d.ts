declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
interface Connection {
    shouldRegisterReadEvent(): boolean
    shouldRegisterServerReadEvent(): boolean
    read(): boolean
    close(): void
    getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
    getContactInfo(): com.sun.corba.se.pept.transport.ContactInfo
    getEventHandler(): com.sun.corba.se.pept.transport.EventHandler
    isServer(): boolean
    isBusy(): boolean
    getTimeStamp(): long
    setTimeStamp(arg0: long): void
    setState(arg0: java.lang.String | string): void
    writeLock(): void
    writeUnlock(): void
    sendWithoutLock(arg0: com.sun.corba.se.pept.encoding.OutputObject): void
    registerWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    waitForResponse(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
    unregisterWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    setConnectionCache(arg0: com.sun.corba.se.pept.transport.ConnectionCache): void
    getConnectionCache(): com.sun.corba.se.pept.transport.ConnectionCache
}

                    }
                }
            }
        }
    }
}