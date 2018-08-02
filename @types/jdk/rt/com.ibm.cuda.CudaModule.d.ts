declare namespace com {
    namespace ibm {
        namespace cuda {
class CudaModule {
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: byte[])
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: byte[], arg2: com.ibm.cuda.CudaJitOptions)
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: java.io.InputStream)
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: java.io.InputStream, arg2: com.ibm.cuda.CudaJitOptions)
    public getFunction(arg0: java.lang.String | string): com.ibm.cuda.CudaFunction
    public getGlobal(arg0: java.lang.String | string): com.ibm.cuda.CudaGlobal
    public getSurface(arg0: java.lang.String | string): com.ibm.cuda.CudaSurface
    public getTexture(arg0: java.lang.String | string): com.ibm.cuda.CudaTexture
    public unload(): void
    public static class: java.lang.Class<any>
}

        }
    }
}