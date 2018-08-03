declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            class JavaClass extends com.sun.org.apache.bcel.internal.classfile.AccessFlags implements java.lang.Cloneable , com.sun.org.apache.bcel.internal.classfile.Node {
                                public static readonly HEAP: byte
                                public static readonly FILE: byte
                                public static readonly ZIP: byte
                                public constructor(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: int, arg6: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg7: int[], arg8: com.sun.org.apache.bcel.internal.classfile.Field[], arg9: com.sun.org.apache.bcel.internal.classfile.Method[], arg10: com.sun.org.apache.bcel.internal.classfile.Attribute[], arg11: byte)
                                public constructor(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: int, arg6: com.sun.org.apache.bcel.internal.classfile.ConstantPool, arg7: int[], arg8: com.sun.org.apache.bcel.internal.classfile.Field[], arg9: com.sun.org.apache.bcel.internal.classfile.Method[], arg10: com.sun.org.apache.bcel.internal.classfile.Attribute[])
                                public accept(arg0: com.sun.org.apache.bcel.internal.classfile.Visitor): void
                                public dump(arg0: java.io.File): void
                                public dump(arg0: java.lang.String | string): void
                                public getBytes(): byte[]
                                public dump(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public dump(arg0: java.io.DataOutputStream): void
                                public getAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                public getClassName(): string
                                public getPackageName(): string
                                public getClassNameIndex(): int
                                public getConstantPool(): com.sun.org.apache.bcel.internal.classfile.ConstantPool
                                public getFields(): com.sun.org.apache.bcel.internal.classfile.Field[]
                                public getFileName(): string
                                public getInterfaceNames(): java.lang.String[]
                                public getInterfaceIndices(): int[]
                                public getMajor(): int
                                public getMethods(): com.sun.org.apache.bcel.internal.classfile.Method[]
                                public getMethod(arg0: java.lang.reflect.Method): com.sun.org.apache.bcel.internal.classfile.Method
                                public getMinor(): int
                                public getSourceFileName(): string
                                public getSuperclassName(): string
                                public getSuperclassNameIndex(): int
                                public setAttributes(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute[]): void
                                public setClassName(arg0: java.lang.String | string): void
                                public setClassNameIndex(arg0: int): void
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
                                public setFields(arg0: com.sun.org.apache.bcel.internal.classfile.Field[]): void
                                public setFileName(arg0: java.lang.String | string): void
                                public setInterfaceNames(arg0: java.lang.String[]): void
                                public setInterfaces(arg0: int[]): void
                                public setMajor(arg0: int): void
                                public setMethods(arg0: com.sun.org.apache.bcel.internal.classfile.Method[]): void
                                public setMinor(arg0: int): void
                                public setSourceFileName(arg0: java.lang.String | string): void
                                public setSuperclassName(arg0: java.lang.String | string): void
                                public setSuperclassNameIndex(arg0: int): void
                                public toString(): string
                                public copy(): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                public isSuper(): boolean
                                public isClass(): boolean
                                public getSource(): byte
                                public getRepository(): com.sun.org.apache.bcel.internal.util.Repository
                                public setRepository(arg0: com.sun.org.apache.bcel.internal.util.Repository): void
                                public instanceOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): boolean
                                public implementationOf(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): boolean
                                public getSuperClass(): com.sun.org.apache.bcel.internal.classfile.JavaClass
                                public getSuperClasses(): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
                                public getInterfaces(): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
                                public getAllInterfaces(): com.sun.org.apache.bcel.internal.classfile.JavaClass[]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}