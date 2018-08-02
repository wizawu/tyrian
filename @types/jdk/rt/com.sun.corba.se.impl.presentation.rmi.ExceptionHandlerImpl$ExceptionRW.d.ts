declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            interface ExceptionHandlerImpl$ExceptionRW {
                                getExceptionClass(): java.lang.Class
                                getId(): string
                                write(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Exception): void
                                read(arg0: org.omg.CORBA_2_3.portable.InputStream): java.lang.Exception
                            }
                        }
                    }
                }
            }
        }
    }
}