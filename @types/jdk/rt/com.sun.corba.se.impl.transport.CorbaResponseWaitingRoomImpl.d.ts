declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class CorbaResponseWaitingRoomImpl implements com.sun.corba.se.spi.transport.CorbaResponseWaitingRoom {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection)
    public registerWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    public unregisterWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    public waitForResponse(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
    public responseReceived(arg0: com.sun.corba.se.pept.encoding.InputObject): void
    public numberRegistered(): int
    public signalExceptionToAllWaiters(arg0: org.omg.CORBA.SystemException): void
    public getMessageMediator(arg0: int): com.sun.corba.se.pept.protocol.MessageMediator
    protected dprint(arg0: java.lang.String | string): void
    protected opAndId(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}