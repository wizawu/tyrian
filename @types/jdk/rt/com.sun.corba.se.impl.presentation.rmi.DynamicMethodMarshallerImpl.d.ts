declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
class DynamicMethodMarshallerImpl implements com.sun.corba.se.spi.presentation.rmi.DynamicMethodMarshaller {
    public static makeReaderWriter(arg0: java.lang.Class): com.sun.corba.se.impl.presentation.rmi.DynamicMethodMarshallerImpl$ReaderWriter
    public constructor(arg0: java.lang.reflect.Method)
    public getMethod(): java.lang.reflect.Method
    public copyArguments(arg0: java.lang.Object[], arg1: com.sun.corba.se.spi.orb.ORB): java.lang.Object[]
    public readArguments(arg0: org.omg.CORBA_2_3.portable.InputStream): java.lang.Object[]
    public writeArguments(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Object[]): void
    public copyResult(arg0: java.lang.Object, arg1: com.sun.corba.se.spi.orb.ORB): java.lang.Object
    public readResult(arg0: org.omg.CORBA_2_3.portable.InputStream): java.lang.Object
    public writeResult(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Object): void
    public isDeclaredException(arg0: java.lang.Throwable): boolean
    public writeException(arg0: org.omg.CORBA_2_3.portable.OutputStream, arg1: java.lang.Exception): void
    public readException(arg0: org.omg.CORBA.portable.ApplicationException): java.lang.Exception
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}