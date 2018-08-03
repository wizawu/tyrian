declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaLinker {
                public constructor(arg0: com.ibm.cuda.CudaDevice)
                public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: com.ibm.cuda.CudaJitOptions)
                public add(arg0: com.ibm.cuda.CudaJitInputType, arg1: byte[], arg2: java.lang.String | string): com.ibm.cuda.CudaLinker
                public add(arg0: com.ibm.cuda.CudaJitInputType, arg1: byte[], arg2: java.lang.String | string, arg3: com.ibm.cuda.CudaJitOptions): com.ibm.cuda.CudaLinker
                public add(arg0: com.ibm.cuda.CudaJitInputType, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.lang.String | string): com.ibm.cuda.CudaLinker
                public add(arg0: com.ibm.cuda.CudaJitInputType, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.lang.String | string, arg3: com.ibm.cuda.CudaJitOptions): com.ibm.cuda.CudaLinker
                public complete(): byte[]
                public destroy(): void
                public getErrorLogBuffer(): string
                public getInfoLogBuffer(): string
                public getWallTime(): float
                public static class: java.lang.Class<any>
            }
        }
    }
}