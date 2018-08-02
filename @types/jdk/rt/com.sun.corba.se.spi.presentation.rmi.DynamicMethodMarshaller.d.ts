declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
                            interface DynamicMethodMarshaller {
                                getMethod(): java.lang.reflect.Method
                                copyArguments(arg0: java.lang.Object[], arg1: com.sun.corba.se.spi.orb.ORB): java.lang.Object[]
                                readArguments(arg0: org.omg.CORBA_2_3.portable.InputStream): java.lang.Object[]
                                writeArguments(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Object[]): void
                                copyResult(arg0: java.lang.Object, arg1: com.sun.corba.se.spi.orb.ORB): java.lang.Object
                                readResult(arg0: org.omg.CORBA_2_3.portable.InputStream): java.lang.Object
                                writeResult(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Object): void
                                isDeclaredException(arg0: java.lang.Throwable): boolean
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