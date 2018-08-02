declare namespace org {
    namespace omg {
        namespace IOP {
            interface CodecOperations {
                encode(arg0: org.omg.CORBA.Any): byte[]
                decode(arg0: byte[]): org.omg.CORBA.Any
                encode_value(arg0: org.omg.CORBA.Any): byte[]
                decode_value(arg0: byte[], arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.Any
            }
        }
    }
}