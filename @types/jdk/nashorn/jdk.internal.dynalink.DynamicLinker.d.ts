declare namespace jdk {
    namespace internal {
        namespace dynalink {
            class DynamicLinker {
                public link<T extends jdk.internal.dynalink.RelinkableCallSite>(arg0: T): T
                public getLinkerServices<T extends jdk.internal.dynalink.RelinkableCallSite>(): jdk.internal.dynalink.linker.LinkerServices
                public static getLinkedCallSiteLocation<T extends jdk.internal.dynalink.RelinkableCallSite>(): java.lang.StackTraceElement
                public static getRelinkedCallSiteLocation<T extends jdk.internal.dynalink.RelinkableCallSite>(): java.lang.StackTraceElement
                public static class: java.lang.Class<any>
            }
        }
    }
}