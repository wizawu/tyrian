declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
interface DatatypeWriter<DT> {
    BUILTIN: java.util.List<com.sun.xml.internal.txw2.DatatypeWriter<any>>
    getType(): java.lang.Class<DT>
    print(arg0: DT, arg1: com.sun.xml.internal.txw2.NamespaceResolver | com.sun.xml.internal.txw2.NamespaceResolver$$Lambda, arg2: java.lang.StringBuilder): void
}

                }
            }
        }
    }
}