declare namespace sun {
    namespace management {
interface HotspotCompilationMBean {
    getCompilerThreadCount(): int
    getCompilerThreadStats(): java.util.List<sun.management.CompilerThreadStat>
    getTotalCompileCount(): long
    getBailoutCompileCount(): long
    getInvalidatedCompileCount(): long
    getLastCompile(): sun.management.MethodInfo
    getFailedCompile(): sun.management.MethodInfo
    getInvalidatedCompile(): sun.management.MethodInfo
    getCompiledMethodCodeSize(): long
    getCompiledMethodSize(): long
    getInternalCompilerCounters(): java.util.List<sun.management.counter.Counter>
}

    }
}