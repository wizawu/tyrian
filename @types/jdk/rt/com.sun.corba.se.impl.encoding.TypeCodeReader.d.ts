declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
interface TypeCodeReader extends com.sun.corba.se.impl.encoding.MarshalInputStream {
    addTypeCodeAtPosition(arg0: com.sun.corba.se.impl.corba.TypeCodeImpl, arg1: int): void
    getTypeCodeAtPosition(arg0: int): com.sun.corba.se.impl.corba.TypeCodeImpl
    setEnclosingInputStream(arg0: org.omg.CORBA_2_3.portable.InputStream): void
    getTopLevelStream(): com.sun.corba.se.impl.encoding.TypeCodeReader
    getTopLevelPosition(): int
    getPosition(): int
    printTypeMap(): void
}

                    }
                }
            }
        }
    }
}