declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface ObjectReferenceFactory extends org.omg.CORBA.portable.ValueBase {
                make_object(arg0: java.lang.String | string, arg1: byte[]): org.omg.CORBA.Object
            }
            interface ObjectReferenceFactory$$Lambda extends org.omg.CORBA.portable.ValueBase {
                (arg0: java.lang.String | string, arg1: byte[]): org.omg.CORBA.Object
            }
        }
    }
}