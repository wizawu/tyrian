declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            abstract class FieldGenOrMethodGen extends com.sun.org.apache.bcel.internal.classfile.AccessFlags implements com.sun.org.apache.bcel.internal.generic.NamedAndTyped , java.lang.Cloneable {
                                protected name: string
                                protected type: com.sun.org.apache.bcel.internal.generic.Type
                                protected cp: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen
                                protected constructor()
                                public setType(arg0: com.sun.org.apache.bcel.internal.generic.Type): void
                                public getType(): com.sun.org.apache.bcel.internal.generic.Type
                                public getName(): string
                                public setName(arg0: java.lang.String | string): void
                                public getConstantPool(): com.sun.org.apache.bcel.internal.generic.ConstantPoolGen
                                public setConstantPool(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): void
                                public addAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
                                public removeAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
                                public removeAttributes(): void
                                public getAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                public getSignature(): string
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