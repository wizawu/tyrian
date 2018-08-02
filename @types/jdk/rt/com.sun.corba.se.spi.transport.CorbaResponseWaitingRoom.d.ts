declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface CorbaResponseWaitingRoom extends com.sun.corba.se.pept.transport.ResponseWaitingRoom {
    signalExceptionToAllWaiters(arg0: org.omg.CORBA.SystemException): void
    getMessageMediator(arg0: int): com.sun.corba.se.pept.protocol.MessageMediator
}

                    }
                }
            }
        }
    }
}