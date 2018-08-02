declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaEvent implements java.lang.AutoCloseable {
                public static FLAG_DEFAULT: int
                public static FLAG_BLOCKING_SYNC: int
                public static FLAG_DISABLE_TIMING: int
                public static FLAG_INTERPROCESS: int
                public constructor(arg0: com.ibm.cuda.CudaDevice)
                public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: int)
                public close(): void
                public elapsedTimeSince(arg0: com.ibm.cuda.CudaEvent | com.ibm.cuda.CudaEvent$$Lambda): float
                public query(): int
                public record(arg0: com.ibm.cuda.CudaDevice): void
                public record(arg0: com.ibm.cuda.CudaStream | com.ibm.cuda.CudaStream$$Lambda): void
                public synchronize(): void
                public static class: java.lang.Class<any>
            }
            class CudaEvent$$Lambda implements java.lang.AutoCloseable {
                public static FLAG_DEFAULT: int
            }
        }
    }
}