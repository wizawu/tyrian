declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
                        class CDREncapsCodec extends org.omg.CORBA.LocalObject implements org.omg.IOP.Codec {
                            public constructor(arg0: org.omg.CORBA.ORB, arg1: int, arg2: int)
                            public encode(arg0: org.omg.CORBA.Any): byte[]
                            public decode(arg0: byte[]): org.omg.CORBA.Any
                            public encode_value(arg0: org.omg.CORBA.Any): byte[]
                            public decode_value(arg0: byte[], arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.Any
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}