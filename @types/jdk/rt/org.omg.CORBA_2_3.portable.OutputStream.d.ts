declare namespace org {
    namespace omg {
        namespace CORBA_2_3 {
            namespace portable {
                abstract class OutputStream extends org.omg.CORBA.portable.OutputStream {
                    public constructor()
                    public write_value(arg0: java.io.Serializable): void
                    public write_value(arg0: java.io.Serializable, arg1: java.lang.Class): void
                    public write_value(arg0: java.io.Serializable, arg1: java.lang.String | string): void
                    public write_value(arg0: java.io.Serializable, arg1: org.omg.CORBA.portable.BoxedValueHelper): void
                    public write_abstract_interface(arg0: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}