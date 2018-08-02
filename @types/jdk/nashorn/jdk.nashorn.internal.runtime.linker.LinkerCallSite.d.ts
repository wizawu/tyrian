declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
                    class LinkerCallSite extends jdk.internal.dynalink.ChainedCallSite {
                        public static ARGLIMIT: int
                        protected getPruneCatches(): java.lang.invoke.MethodHandle
                        public static getCatchInvalidationCount(arg0: java.lang.Object): int
                        public toString(): string
                        public getNashornDescriptor(): jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor
                        public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                        public static increaseMissCount(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                        protected getMaxChainLength(): int
                        public static getCount(): long
                        public static getMissCount(): long
                        public static getMissSamplingPercentage(): int
                        public static getMissCounts(arg0: java.io.PrintWriter): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}