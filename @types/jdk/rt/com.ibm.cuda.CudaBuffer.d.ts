declare namespace com {
    namespace ibm {
        namespace cuda {
class CudaBuffer implements java.lang.AutoCloseable {
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: long)
    public atOffset(arg0: long): com.ibm.cuda.CudaBuffer
    public close(): void
    public copyFrom(arg0: byte[]): void
    public copyFrom(arg0: byte[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.ByteBuffer): void
    public copyFrom(arg0: char[]): void
    public copyFrom(arg0: char[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): void
    public copyFrom(arg0: com.ibm.cuda.CudaBuffer | com.ibm.cuda.CudaBuffer$$Lambda, arg1: long, arg2: long): void
    public copyFrom(arg0: double[]): void
    public copyFrom(arg0: double[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.DoubleBuffer): void
    public copyFrom(arg0: float[]): void
    public copyFrom(arg0: float[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.FloatBuffer): void
    public copyFrom(arg0: int[]): void
    public copyFrom(arg0: int[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.IntBuffer): void
    public copyFrom(arg0: long[]): void
    public copyFrom(arg0: long[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.LongBuffer): void
    public copyFrom(arg0: short[]): void
    public copyFrom(arg0: short[], arg1: int, arg2: int): void
    public copyFrom(arg0: java.nio.ShortBuffer): void
    public copyTo(arg0: byte[]): void
    public copyTo(arg0: byte[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.ByteBuffer): void
    public copyTo(arg0: char[]): void
    public copyTo(arg0: char[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): void
    public copyTo(arg0: double[]): void
    public copyTo(arg0: double[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.DoubleBuffer): void
    public copyTo(arg0: float[]): void
    public copyTo(arg0: float[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.FloatBuffer): void
    public copyTo(arg0: int[]): void
    public copyTo(arg0: int[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.IntBuffer): void
    public copyTo(arg0: long[]): void
    public copyTo(arg0: long[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.LongBuffer): void
    public copyTo(arg0: short[]): void
    public copyTo(arg0: short[], arg1: int, arg2: int): void
    public copyTo(arg0: java.nio.ShortBuffer): void
    public fillByte(arg0: byte, arg1: long): void
    public fillChar(arg0: char, arg1: long): void
    public fillFloat(arg0: float, arg1: long): void
    public fillInt(arg0: int, arg1: long): void
    public fillShort(arg0: short, arg1: long): void
    public getLength(): long
    public slice(arg0: long, arg1: long): com.ibm.cuda.CudaBuffer
    public static class: java.lang.Class<any>
}

class CudaBuffer$$Lambda implements java.lang.AutoCloseable {
    public constructor(arg0: com.ibm.cuda.CudaDevice, arg1: long)
}

        }
    }
}