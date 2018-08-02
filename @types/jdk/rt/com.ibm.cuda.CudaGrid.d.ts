declare namespace com {
    namespace ibm {
        namespace cuda {
class CudaGrid {
    public blockDimX: int
    public blockDimY: int
    public blockDimZ: int
    public gridDimX: int
    public gridDimY: int
    public gridDimZ: int
    public sharedMemBytes: int
    public stream: com.ibm.cuda.CudaStream
    public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3)
    public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: com.ibm.cuda.CudaStream | com.ibm.cuda.CudaStream$$Lambda)
    public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: int)
    public constructor(arg0: com.ibm.cuda.Dim3, arg1: com.ibm.cuda.Dim3, arg2: int, arg3: com.ibm.cuda.CudaStream | com.ibm.cuda.CudaStream$$Lambda)
    public constructor(arg0: int, arg1: int)
    public constructor(arg0: int, arg1: int, arg2: com.ibm.cuda.CudaStream | com.ibm.cuda.CudaStream$$Lambda)
    public constructor(arg0: int, arg1: int, arg2: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: com.ibm.cuda.CudaStream | com.ibm.cuda.CudaStream$$Lambda)
    public static class: java.lang.Class<any>
}

        }
    }
}