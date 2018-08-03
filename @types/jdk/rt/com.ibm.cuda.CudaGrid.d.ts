declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaGrid {
                public readonly blockDimX: int
                public readonly blockDimY: int
                public readonly blockDimZ: int
                public readonly gridDimX: int
                public readonly gridDimY: int
                public readonly gridDimZ: int
                public readonly sharedMemBytes: int
                public readonly stream: com.ibm.cuda.CudaStream
                public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3)
                public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: com.ibm.cuda.CudaStream)
                public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: int)
                public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: int, arg3: com.ibm.cuda.CudaStream)
                public constructor(arg0: int, arg1: int)
                public constructor(arg0: int, arg1: int, arg2: com.ibm.cuda.CudaStream)
                public constructor(arg0: int, arg1: int, arg2: int)
                public constructor(arg0: int, arg1: int, arg2: int, arg3: com.ibm.cuda.CudaStream)
                public static class: java.lang.Class<any>
            }
        }
    }
}