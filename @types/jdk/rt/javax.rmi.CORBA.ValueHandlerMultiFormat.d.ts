declare namespace javax {
    namespace rmi {
        namespace CORBA {
interface ValueHandlerMultiFormat extends javax.rmi.CORBA.ValueHandler {
    getMaximumStreamFormatVersion(): byte
    writeValue(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable, arg2: byte): void
}

        }
    }
}