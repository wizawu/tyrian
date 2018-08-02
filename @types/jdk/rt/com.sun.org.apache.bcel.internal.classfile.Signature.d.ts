declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
class Signature extends com.sun.org.apache.bcel.internal.classfile.Attribute {
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Signature)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
    public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
    public dump(arg0: java.io.DataOutputStream): void
    public getSignatureIndex(): int
    public setSignatureIndex(arg0: int): void
    public getSignature(): string
    public static translate(arg0: java.lang.String | string): string
    public static isFormalParameterList(arg0: java.lang.String | string): boolean
    public static isActualParameterList(arg0: java.lang.String | string): boolean
    public toString(): string
    public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}