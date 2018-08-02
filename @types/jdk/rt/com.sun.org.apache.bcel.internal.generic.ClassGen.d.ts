declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
class ClassGen extends com.sun.org.apache.bcel.internal.classfile.AccessFlags implements java.lang.Cloneable {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String[], arg5: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String[])
    public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass | com.sun.org.apache.bcel.internal.classfile.JavaClass$$Lambda)
    public getJavaClass(): com.sun.org.apache.bcel.internal.classfile.JavaClass
    public addInterface(arg0: java.lang.String | string): void
    public removeInterface(arg0: java.lang.String | string): void
    public getMajor(): int
    public setMajor(arg0: int): void
    public setMinor(arg0: int): void
    public getMinor(): int
    public addAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
    public addMethod(arg0: com.sun.org.apache.bcel.internal.classfile.Method): void
    public addEmptyConstructor(arg0: int): void
    public addField(arg0: com.sun.org.apache.bcel.internal.classfile.Field): void
    public containsField(arg0: com.sun.org.apache.bcel.internal.classfile.Field): boolean
    public containsField(arg0: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.Field
    public containsMethod(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.bcel.internal.classfile.Method
    public removeAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
    public removeMethod(arg0: com.sun.org.apache.bcel.internal.classfile.Method): void
    public replaceMethod(arg0: com.sun.org.apache.bcel.internal.classfile.Method, arg1: com.sun.org.apache.bcel.internal.classfile.Method): void
    public replaceField(arg0: com.sun.org.apache.bcel.internal.classfile.Field, arg1: com.sun.org.apache.bcel.internal.classfile.Field): void
    public removeField(arg0: com.sun.org.apache.bcel.internal.classfile.Field): void
    public getClassName(): string
    public getSuperclassName(): string
    public getFileName(): string
    public setClassName(arg0: java.lang.String | string): void
    public setSuperclassName(arg0: java.lang.String | string): void
    public getMethods(): com.sun.org.apache.bcel.internal.classfile.Method[]
    public setMethods(arg0: com.sun.org.apache.bcel.internal.classfile.Method[]): void
    public setMethodAt(arg0: com.sun.org.apache.bcel.internal.classfile.Method, arg1: int): void
    public getMethodAt(arg0: int): com.sun.org.apache.bcel.internal.classfile.Method
    public getInterfaceNames(): java.lang.String[]
    public getInterfaces(): int[]
    public getFields(): com.sun.org.apache.bcel.internal.classfile.Field[]
    public getAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
    public getConstantPool(): com.sun.org.apache.bcel.internal.generic.ConstantPoolGen
    public setConstantPool(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): void
    public setClassNameIndex(arg0: int): void
    public setSuperclassNameIndex(arg0: int): void
    public getSuperclassNameIndex(): int
    public getClassNameIndex(): int
    public addObserver(arg0: com.sun.org.apache.bcel.internal.generic.ClassObserver | com.sun.org.apache.bcel.internal.generic.ClassObserver$$Lambda): void
    public removeObserver(arg0: com.sun.org.apache.bcel.internal.generic.ClassObserver | com.sun.org.apache.bcel.internal.generic.ClassObserver$$Lambda): void
    public update(): void
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}