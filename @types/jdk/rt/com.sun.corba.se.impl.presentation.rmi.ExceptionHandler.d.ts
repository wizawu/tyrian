declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            interface ExceptionHandler {
                                isDeclaredException(arg0: java.lang.Class): boolean
                                writeException(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Exception): void
                                readException(arg0: org.omg.CORBA.portable.ApplicationException): java.lang.Exception
                            }
                        }
                    }
                }
            }
        }
    }
}