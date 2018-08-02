declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
abstract class Utility {
    public constructor()
    public static accessToString(arg0: int): string
    public static accessToString(arg0: int, arg1: boolean): string
    public static classOrInterface(arg0: int): string
    public static codeToString(arg0: byte[], arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg2: int, arg3: int, arg4: boolean): string
    public static codeToString(arg0: byte[], arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg2: int, arg3: int): string
    public static codeToString(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg2: boolean): string
    public static codeToString(arg0: com.sun.org.apache.bcel.internal.util.ByteSequence, arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool): string
    public static compactClassName(arg0: java.lang.String | string): string
    public static compactClassName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
    public static compactClassName(arg0: java.lang.String | string, arg1: boolean): string
    public static setBit(arg0: int, arg1: int): int
    public static clearBit(arg0: int, arg1: int): int
    public static isSet(arg0: int, arg1: int): boolean
    public static methodTypeToSignature(arg0: java.lang.String | string, arg1: java.lang.String[]): string
    public static methodSignatureArgumentTypes(arg0: java.lang.String | string): java.lang.String[]
    public static methodSignatureArgumentTypes(arg0: java.lang.String | string, arg1: boolean): java.lang.String[]
    public static methodSignatureReturnType(arg0: java.lang.String | string): string
    public static methodSignatureReturnType(arg0: java.lang.String | string, arg1: boolean): string
    public static methodSignatureToString(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public static methodSignatureToString(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): string
    public static methodSignatureToString(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: com.sun.org.apache.bcel.internal.classfile.LocalVariableTable): string
    public static replace(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public static signatureToString(arg0: java.lang.String | string): string
    public static signatureToString(arg0: java.lang.String | string, arg1: boolean): string
    public static getSignature(arg0: java.lang.String | string): string
    public static typeOfMethodSignature(arg0: java.lang.String | string): byte
    public static typeOfSignature(arg0: java.lang.String | string): byte
    public static searchOpcode(arg0: java.lang.String | string): short
    public static toHexString(arg0: byte[]): string
    public static format(arg0: int, arg1: int, arg2: boolean, arg3: char): string
    public static fillup(arg0: java.lang.String | string, arg1: int, arg2: boolean, arg3: char): string
    public static printArray(arg0: java.io.PrintStream, arg1: java.lang.Object[]): void
    public static printArray(arg0: java.io.PrintWriter, arg1: java.lang.Object[]): void
    public static printArray(arg0: java.lang.Object[]): string
    public static printArray(arg0: java.lang.Object[], arg1: boolean): string
    public static printArray(arg0: java.lang.Object[], arg1: boolean, arg2: boolean): string
    public static isJavaIdentifierPart(arg0: char): boolean
    public static encode(arg0: byte[], arg1: boolean): string
    public static decode(arg0: java.lang.String | string, arg1: boolean): byte[]
    public static convertString(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}