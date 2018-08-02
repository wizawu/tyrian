declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        interface RepositoryIdStrings {
                            createForAnyType(arg0: java.lang.Class): string
                            createForJavaType(arg0: java.io.Serializable): string
                            createForJavaType(arg0: java.lang.Class): string
                            createSequenceRepID(arg0: java.lang.Object): string
                            createSequenceRepID(arg0: java.lang.Class): string
                            getFromString(arg0: java.lang.String | string): com.sun.corba.se.impl.orbutil.RepositoryIdInterface
                            getClassDescValueRepId(): string
                            getWStringValueRepId(): string
                        }
                    }
                }
            }
        }
    }
}