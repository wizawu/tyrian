declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
interface BoxedValueHelper {
    read_value(arg0: org.omg.CORBA.portable.InputStream): java.io.Serializable
    write_value(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable): void
    get_id(): string
}

            }
        }
    }
}