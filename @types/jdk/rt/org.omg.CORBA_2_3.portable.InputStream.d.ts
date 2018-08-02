declare namespace org {
    namespace omg {
        namespace CORBA_2_3 {
            namespace portable {
                abstract class InputStream extends org.omg.CORBA.portable.InputStream {
                    public constructor()
                    public read_value(): java.io.Serializable
                    public read_value(arg0: java.lang.Class): java.io.Serializable
                    public read_value(arg0: org.omg.CORBA.portable.BoxedValueHelper): java.io.Serializable
                    public read_value(arg0: java.lang.String | string): java.io.Serializable
                    public read_value(arg0: java.io.Serializable): java.io.Serializable
                    public read_abstract_interface(): java.lang.Object
                    public read_abstract_interface(arg0: java.lang.Class): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}