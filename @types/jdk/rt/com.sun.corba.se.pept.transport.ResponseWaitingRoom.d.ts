declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
                        interface ResponseWaitingRoom {
                            registerWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            waitForResponse(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            responseReceived(arg0: com.sun.corba.se.pept.encoding.InputObject): void
                            unregisterWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            numberRegistered(): int
                        }
                    }
                }
            }
        }
    }
}