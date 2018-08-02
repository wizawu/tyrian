declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
class ConstantPoolGen implements java.io.Serializable {
    protected size: int
    protected constants: com.sun.org.apache.bcel.internal.classfile.Constant[]
    protected index: int
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Constant[])
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool)
    public constructor()
    protected adjustSize(): void
    public lookupString(arg0: java.lang.String | string): int
    public addString(arg0: java.lang.String | string): int
    public lookupClass(arg0: java.lang.String | string): int
    public addClass(arg0: java.lang.String | string): int
    public addClass(arg0: com.sun.org.apache.bcel.internal.generic.ObjectType): int
    public addArrayClass(arg0: com.sun.org.apache.bcel.internal.generic.ArrayType): int
    public lookupInteger(arg0: int): int
    public addInteger(arg0: int): int
    public lookupFloat(arg0: float): int
    public addFloat(arg0: float): int
    public lookupUtf8(arg0: java.lang.String | string): int
    public addUtf8(arg0: java.lang.String | string): int
    public lookupLong(arg0: long): int
    public addLong(arg0: long): int
    public lookupDouble(arg0: double): int
    public addDouble(arg0: double): int
    public lookupNameAndType(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public addNameAndType(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public lookupMethodref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public lookupMethodref(arg0: com.sun.org.apache.bcel.internal.generic.MethodGen): int
    public addMethodref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public addMethodref(arg0: com.sun.org.apache.bcel.internal.generic.MethodGen): int
    public lookupInterfaceMethodref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public lookupInterfaceMethodref(arg0: com.sun.org.apache.bcel.internal.generic.MethodGen): int
    public addInterfaceMethodref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public addInterfaceMethodref(arg0: com.sun.org.apache.bcel.internal.generic.MethodGen): int
    public lookupFieldref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public addFieldref(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public getConstant(arg0: int): com.sun.org.apache.bcel.internal.classfile.Constant
    public setConstant(arg0: int, arg1: com.sun.org.apache.bcel.internal.classfile.Constant): void
    public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
    public getSize(): int
    public getFinalConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
    public toString(): string
    public addConstant(arg0: com.sun.org.apache.bcel.internal.classfile.Constant, arg1: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}