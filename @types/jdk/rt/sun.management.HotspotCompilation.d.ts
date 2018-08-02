declare namespace sun {
    namespace management {
        class HotspotCompilation implements sun.management.HotspotCompilationMBean {
            public getCompilerThreadCount(): int
            public getTotalCompileCount(): long
            public getBailoutCompileCount(): long
            public getInvalidatedCompileCount(): long
            public getCompiledMethodCodeSize(): long
            public getCompiledMethodSize(): long
            public getCompilerThreadStats(): java.util.List<sun.management.CompilerThreadStat>
            public getLastCompile(): sun.management.MethodInfo
            public getFailedCompile(): sun.management.MethodInfo
            public getInvalidatedCompile(): sun.management.MethodInfo
            public getInternalCompilerCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
    }
}