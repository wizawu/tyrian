declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
interface Streamable {
    _read(arg0: org.omg.CORBA.portable.InputStream): void
    _write(arg0: org.omg.CORBA.portable.OutputStream): void
    _type(): org.omg.CORBA.TypeCode
}

            }
        }
    }
}