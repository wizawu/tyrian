declare namespace com {
    namespace ibm {
        namespace cuda {
class CudaJitOptions implements java.lang.Cloneable {
    public constructor()
    protected clone(): com.ibm.cuda.CudaJitOptions
    public getErrorLogBuffer(): string
    public getInfoLogBuffer(): string
    public getThreadsPerBlock(): int
    public getWallTime(): float
    public recordWallTime(): com.ibm.cuda.CudaJitOptions
    public setCacheMode(arg0: com.ibm.cuda.CudaJitOptions$CacheMode): com.ibm.cuda.CudaJitOptions
    public setErrorLogBufferSize(arg0: int): com.ibm.cuda.CudaJitOptions
    public setGenerateDebugInfo(arg0: boolean): com.ibm.cuda.CudaJitOptions
    public setGenerateLineInfo(arg0: boolean): com.ibm.cuda.CudaJitOptions
    public setInfoLogBufferSize(arg0: int): com.ibm.cuda.CudaJitOptions
    public setJitFallbackStrategy(arg0: com.ibm.cuda.CudaJitOptions$Fallback): com.ibm.cuda.CudaJitOptions
    public setLogVerbose(arg0: boolean): com.ibm.cuda.CudaJitOptions
    public setMaxRegisters(arg0: int): com.ibm.cuda.CudaJitOptions
    public setOptimizationLevel(arg0: int): com.ibm.cuda.CudaJitOptions
    public setTarget(arg0: com.ibm.cuda.CudaJitTarget): com.ibm.cuda.CudaJitOptions
    public setTargetFromCuContext(): com.ibm.cuda.CudaJitOptions
    public setThreadsPerBlock(arg0: int): com.ibm.cuda.CudaJitOptions
    protected clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}