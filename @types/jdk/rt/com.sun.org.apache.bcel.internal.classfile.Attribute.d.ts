declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
abstract class Attribute implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node , java.io.Serializable {
    protected name_index: int
    protected length: int
    protected tag: byte
    protected constant_pool: com.sun.org.apache.bcel.internal.classfile.ConstantPool
    protected constructor(arg0: byte, arg1: int, arg2: int, arg3: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
    public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
    public dump(arg0: java.io.DataOutputStream): void
    public static addAttributeReader(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.classfile.AttributeReader | com.sun.org.apache.bcel.internal.classfile.AttributeReader$$Lambda): void
    public static removeAttributeReader(arg0: java.lang.String | string): void
    public static readAttribute(arg0: java.io.DataInputStream, arg1: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
    public getLength(): int
    public setLength(arg0: int): void
    public setNameIndex(arg0: int): void
    public getNameIndex(): int
    public getTag(): byte
    public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
    public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
    public clone(): java.lang.Object
    public copy(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): com.sun.org.apache.bcel.internal.classfile.Attribute
    public toString(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}