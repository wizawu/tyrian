declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace generic {
                            class MethodGen extends com.sun.org.apache.bcel.internal.generic.FieldGenOrMethodGen {
                                public constructor(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.Type[], arg3: java.lang.String[], arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: com.sun.org.apache.bcel.internal.generic.InstructionList, arg7: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public constructor(arg0: com.sun.org.apache.bcel.internal.classfile.Method, arg1: java.lang.String | string, arg2: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen)
                                public addLocalVariable(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: int, arg3: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg4: com.sun.org.apache.bcel.internal.generic.InstructionHandle): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                public addLocalVariable(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.Type, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg3: com.sun.org.apache.bcel.internal.generic.InstructionHandle): com.sun.org.apache.bcel.internal.generic.LocalVariableGen
                                public removeLocalVariable(arg0: com.sun.org.apache.bcel.internal.generic.LocalVariableGen): void
                                public removeLocalVariables(): void
                                public getLocalVariables(): com.sun.org.apache.bcel.internal.generic.LocalVariableGen[]
                                public getLocalVariableTable(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.classfile.LocalVariableTable
                                public getLocalVariableTypeTable(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.classfile.LocalVariableTypeTable
                                public addLineNumber(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: int): com.sun.org.apache.bcel.internal.generic.LineNumberGen
                                public removeLineNumber(arg0: com.sun.org.apache.bcel.internal.generic.LineNumberGen): void
                                public removeLineNumbers(): void
                                public getLineNumbers(): com.sun.org.apache.bcel.internal.generic.LineNumberGen[]
                                public getLineNumberTable(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.classfile.LineNumberTable
                                public addExceptionHandler(arg0: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg1: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg2: com.sun.org.apache.bcel.internal.generic.InstructionHandle, arg3: com.sun.org.apache.bcel.internal.generic.ObjectType): com.sun.org.apache.bcel.internal.generic.CodeExceptionGen
                                public removeExceptionHandler(arg0: com.sun.org.apache.bcel.internal.generic.CodeExceptionGen): void
                                public removeExceptionHandlers(): void
                                public getExceptionHandlers(): com.sun.org.apache.bcel.internal.generic.CodeExceptionGen[]
                                public addException(arg0: java.lang.String | string): void
                                public removeException(arg0: java.lang.String | string): void
                                public removeExceptions(): void
                                public getExceptions(): java.lang.String[]
                                public addCodeAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
                                public removeCodeAttribute(arg0: com.sun.org.apache.bcel.internal.classfile.Attribute): void
                                public removeCodeAttributes(): void
                                public getCodeAttributes(): com.sun.org.apache.bcel.internal.classfile.Attribute[]
                                public getMethod(): com.sun.org.apache.bcel.internal.classfile.Method
                                public removeNOPs(): void
                                public setMaxLocals(arg0: int): void
                                public getMaxLocals(): int
                                public setMaxStack(arg0: int): void
                                public getMaxStack(): int
                                public getClassName(): string
                                public setClassName(arg0: java.lang.String | string): void
                                public setReturnType(arg0: com.sun.org.apache.bcel.internal.generic.Type): void
                                public getReturnType(): com.sun.org.apache.bcel.internal.generic.Type
                                public setArgumentTypes(arg0: com.sun.org.apache.bcel.internal.generic.Type[]): void
                                public getArgumentTypes(): com.sun.org.apache.bcel.internal.generic.Type[]
                                public setArgumentType(arg0: int, arg1: com.sun.org.apache.bcel.internal.generic.Type): void
                                public getArgumentType(arg0: int): com.sun.org.apache.bcel.internal.generic.Type
                                public setArgumentNames(arg0: java.lang.String[]): void
                                public getArgumentNames(): java.lang.String[]
                                public setArgumentName(arg0: int, arg1: java.lang.String | string): void
                                public getArgumentName(arg0: int): string
                                public getInstructionList(): com.sun.org.apache.bcel.internal.generic.InstructionList
                                public setInstructionList(arg0: com.sun.org.apache.bcel.internal.generic.InstructionList): void
                                public getSignature(): string
                                public setMaxStack(): void
                                public setMaxLocals(): void
                                public stripAttributes(arg0: boolean): void
                                public static getMaxStack(arg0: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen, arg1: com.sun.org.apache.bcel.internal.generic.InstructionList, arg2: com.sun.org.apache.bcel.internal.generic.CodeExceptionGen[]): int
                                public addObserver(arg0: com.sun.org.apache.bcel.internal.generic.MethodObserver | com.sun.org.apache.bcel.internal.generic.MethodObserver$$Lambda): void
                                public removeObserver(arg0: com.sun.org.apache.bcel.internal.generic.MethodObserver | com.sun.org.apache.bcel.internal.generic.MethodObserver$$Lambda): void
                                public update(): void
                                public toString(): string
                                public copy(arg0: java.lang.String | string, arg1: com.sun.org.apache.bcel.internal.generic.ConstantPoolGen): com.sun.org.apache.bcel.internal.generic.MethodGen
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}