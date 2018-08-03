declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaStream implements java.lang.AutoCloseable {
                public static readonly FLAG_DEFAULT: int
                public static readonly FLAG_NON_BLOCKING: int
                public constructor(arg0: com.ibm.cuda.CudaDevice)
                public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: int, arg2: int)
                public addCallback(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public close(): void
                public getFlags(): int
                public getPriority(): int
                public query(): int
                public synchronize(): void
                public waitFor(arg0: com.ibm.cuda.CudaEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}