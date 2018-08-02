declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace CORBA {
                    namespace portable {
                        interface ValueHelper extends org.omg.CORBA.portable.BoxedValueHelper {
                            get_class(): java.lang.Class
                            get_truncatable_base_ids(): java.lang.String[]
                            get_type(): org.omg.CORBA.TypeCode
                        }
                    }
                }
            }
        }
    }
}