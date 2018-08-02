declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaKernel {
                public constructor(arg0: com.ibm.cuda.CudaModule, arg1: com.ibm.cuda.CudaFunction)
                public constructor(arg0: com.ibm.cuda.CudaModule, arg1: java.lang.String | string)
                public getAttribute(arg0: int): int
                public launch(arg0: com.ibm.cuda.CudaGrid, ...arg1: java.lang.Object[]): void
                public launch(arg0: com.ibm.cuda.CudaGrid, arg1: com.ibm.cuda.CudaKernel$Parameters): void
                public setCacheConfig(arg0: com.ibm.cuda.CudaDevice$CacheConfig): void
                public setSharedMemConfig(arg0: com.ibm.cuda.CudaDevice$SharedMemConfig): void
                public static class: java.lang.Class<any>
            }
        }
    }
}