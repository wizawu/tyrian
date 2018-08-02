declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class FieldGen extends com.sun.org.apache.bcel.internal.generic.FieldGenOrMethodGen {
                                public constructor(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: java.lang.String | string, arg3: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Field, arg1: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public setInitValue(arg0: java.lang.String | string): void
                                public setInitValue(arg0: long): void
                                public setInitValue(arg0: int): void
                                public setInitValue(arg0: short): void
                                public setInitValue(arg0: char): void
                                public setInitValue(arg0: byte): void
                                public setInitValue(arg0: boolean): void
                                public setInitValue(arg0: float): void
                                public setInitValue(arg0: double): void
                                public cancelInitValue(): void
                                public getField(): com.sun.org.apache.bcel.internal.classfile.Field
                                public getSignature(): string
                                public addObserver(arg0: com.sun.org.apache.bcel.internal.generic.FieldObserver | com.sun.org.apache.bcel.internal.generic.FieldObserver$$Lambda): void
                                public removeObserver(arg0: com.sun.org.apache.bcel.internal.generic.FieldObserver | com.sun.org.apache.bcel.internal.generic.FieldObserver$$Lambda): void
                                public update(): void
                                public getInitValue(): string
                                public toString(): string
                                public copy(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.FieldGen
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}