declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace SendingContext {
                    interface CodeBaseOperations extends org.omg.SendingContext.RunTimeOperations {
                        get_ir(): com.sun.org.omg.CORBA.Repository
                        implementation(arg0: java.lang.String | string): string
                        implementations(arg0: java.lang.String[]): java.lang.String[]
                        meta(arg0: java.lang.String | string): com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription
                        metas(arg0: java.lang.String[]): com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription[]
                        bases(arg0: java.lang.String | string): java.lang.String[]
                    }
                }
            }
        }
    }
}