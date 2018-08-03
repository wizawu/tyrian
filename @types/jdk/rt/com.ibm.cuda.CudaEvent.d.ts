declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaEvent implements java.lang.AutoCloseable {
                public static readonly FLAG_DEFAULT: int
                public static readonly FLAG_BLOCKING_SYNC: int
                public static readonly FLAG_DISABLE_TIMING: int
                public static readonly FLAG_INTERPROCESS: int
                public constructor(arg0: com.ibm.cuda.CudaDevice)
                public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: int)
                public close(): void
                public elapsedTimeSince(arg0: com.ibm.cuda.CudaEvent): float
                public query(): int
                public record(arg0: com.ibm.cuda.CudaDevice): void
                public record(arg0: com.ibm.cuda.CudaStream): void
                public synchronize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}