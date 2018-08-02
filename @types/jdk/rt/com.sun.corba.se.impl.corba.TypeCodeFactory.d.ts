declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
                        interface TypeCodeFactory {
                            setTypeCode(arg0: java.lang.String | string, arg1: com.sun.corba.se.impl.corba.TypeCodeImpl): void
                            getTypeCode(arg0: java.lang.String | string): com.sun.corba.se.impl.corba.TypeCodeImpl
                            setTypeCodeForClass(arg0: java.lang.Class, arg1: com.sun.corba.se.impl.corba.TypeCodeImpl): void
                            getTypeCodeForClass(arg0: java.lang.Class): com.sun.corba.se.impl.corba.TypeCodeImpl
                        }
                    }
                }
            }
        }
    }
}