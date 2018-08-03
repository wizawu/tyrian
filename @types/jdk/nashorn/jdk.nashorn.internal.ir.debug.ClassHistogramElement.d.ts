declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace debug {
                    class ClassHistogramElement {
                        public static readonly COMPARE_INSTANCES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public static readonly COMPARE_BYTES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public static readonly COMPARE_CLASSNAMES: java.util.Comparator<jdk.nashorn.internal.ir.debug.ClassHistogramElement>
                        public constructor(arg0: java.lang.Class<any>)
                        public addInstance(arg0: long): void
                        public getBytes(): long
                        public getClazz(): java.lang.Class<any>
                        public getInstances(): long
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}