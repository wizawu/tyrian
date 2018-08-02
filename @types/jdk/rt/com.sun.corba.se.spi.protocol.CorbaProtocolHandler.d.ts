declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
interface CorbaProtocolHandler extends com.sun.corba.se.pept.protocol.ProtocolHandler {
    handleRequest(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    handleRequest(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    createResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    createUserExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    createUnknownExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: org.omg.CORBA.portable.UnknownException): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    createSystemExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: org.omg.CORBA.SystemException, arg2: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    createLocationForward(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.ior.IOR, arg2: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    handleThrowableDuringServerDispatch(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: java.lang.Throwable, arg2: org.omg.CORBA.CompletionStatus): void
}

                    }
                }
            }
        }
    }
}