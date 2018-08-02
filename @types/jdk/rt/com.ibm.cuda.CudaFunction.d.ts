declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaFunction {
                public static ATTRIBUTE_BINARY_VERSION: int
                public static ATTRIBUTE_CONST_SIZE_BYTES: int
                public static ATTRIBUTE_LOCAL_SIZE_BYTES: int
                public static ATTRIBUTE_MAX_THREADS_PER_BLOCK: int
                public static ATTRIBUTE_NUM_REGS: int
                public static ATTRIBUTE_PTX_VERSION: int
                public static ATTRIBUTE_SHARED_SIZE_BYTES: int
                public getAttribute(arg0: int): int
                public setCacheConfig(arg0: com.ibm.cuda.CudaDevice$CacheConfig): void
                public setSharedMemConfig(arg0: com.ibm.cuda.CudaDevice$SharedMemConfig): void
                public static class: java.lang.Class<any>
            }
        }
    }
}