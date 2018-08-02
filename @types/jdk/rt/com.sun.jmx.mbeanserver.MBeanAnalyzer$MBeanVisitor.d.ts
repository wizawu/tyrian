declare namespace com {
    namespace sun {
        namespace jmx {
            namespace mbeanserver {
interface MBeanAnalyzer$MBeanVisitor<M> {
    visitAttribute(arg0: java.lang.String | string, arg1: M, arg2: M): void
    visitOperation(arg0: java.lang.String | string, arg1: M): void
}

            }
        }
    }
}