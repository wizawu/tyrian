declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
class ExceptionHandlerImpl implements com.sun.corba.se.impl.presentation.rmi.ExceptionHandler {
    public constructor(arg0: java.lang.Class[])
    public isDeclaredException(arg0: java.lang.Class): boolean
    public writeException(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Exception): void
    public readException(arg0: org.omg.CORBA.portable.ApplicationException): java.lang.Exception
    public getRMIExceptionRW(arg0: java.lang.Class): com.sun.corba.se.impl.presentation.rmi.ExceptionHandlerImpl$ExceptionRW
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}