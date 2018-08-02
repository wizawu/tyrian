declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace commons {
                        class GeneratorAdapter extends jdk.internal.org.objectweb.asm.commons.LocalVariablesSorter {
                            public static ADD: int
                            public static SUB: int
                            public static MUL: int
                            public static DIV: int
                            public static REM: int
                            public static NEG: int
                            public static SHL: int
                            public static SHR: int
                            public static USHR: int
                            public static AND: int
                            public static OR: int
                            public static XOR: int
                            public static EQ: int
                            public static NE: int
                            public static LT: int
                            public static GE: int
                            public static GT: int
                            public static LE: int
                            public constructor(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string)
                            protected constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.MethodVisitor, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string)
                            public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.commons.Method, arg2: jdk.internal.org.objectweb.asm.MethodVisitor)
                            public constructor(arg0: int, arg1: jdk.internal.org.objectweb.asm.commons.Method, arg2: java.lang.String | string, arg3: jdk.internal.org.objectweb.asm.Type[], arg4: jdk.internal.org.objectweb.asm.ClassVisitor)
                            public push(arg0: boolean): void
                            public push(arg0: int): void
                            public push(arg0: long): void
                            public push(arg0: float): void
                            public push(arg0: double): void
                            public push(arg0: java.lang.String | string): void
                            public push(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public push(arg0: jdk.internal.org.objectweb.asm.Handle): void
                            public loadThis(): void
                            public loadArg(arg0: int): void
                            public loadArgs(arg0: int, arg1: int): void
                            public loadArgs(): void
                            public loadArgArray(): void
                            public storeArg(arg0: int): void
                            public getLocalType(arg0: int): jdk.internal.org.objectweb.asm.Type
                            protected setLocalType(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public loadLocal(arg0: int): void
                            public loadLocal(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public storeLocal(arg0: int): void
                            public storeLocal(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public arrayLoad(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public arrayStore(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public pop(): void
                            public pop2(): void
                            public dup(): void
                            public dup2(): void
                            public dupX1(): void
                            public dupX2(): void
                            public dup2X1(): void
                            public dup2X2(): void
                            public swap(): void
                            public swap(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public math(arg0: int, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public not(): void
                            public iinc(arg0: int, arg1: int): void
                            public cast(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.Type): void
                            public box(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public valueOf(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public unbox(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public newLabel(): jdk.internal.org.objectweb.asm.Label
                            public mark(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public mark(): jdk.internal.org.objectweb.asm.Label
                            public ifCmp(arg0: jdk.internal.org.objectweb.asm.Type, arg1: int, arg2: jdk.internal.org.objectweb.asm.Label): void
                            public ifICmp(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public ifZCmp(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label): void
                            public ifNull(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ifNonNull(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public goTo(arg0: jdk.internal.org.objectweb.asm.Label): void
                            public ret(arg0: int): void
                            public tableSwitch(arg0: int[], arg1: jdk.internal.org.objectweb.asm.commons.TableSwitchGenerator): void
                            public tableSwitch(arg0: int[], arg1: jdk.internal.org.objectweb.asm.commons.TableSwitchGenerator, arg2: boolean): void
                            public returnValue(): void
                            public getStatic(arg0: jdk.internal.org.objectweb.asm.Type, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Type): void
                            public putStatic(arg0: jdk.internal.org.objectweb.asm.Type, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Type): void
                            public getField(arg0: jdk.internal.org.objectweb.asm.Type, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Type): void
                            public putField(arg0: jdk.internal.org.objectweb.asm.Type, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Type): void
                            public invokeVirtual(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.commons.Method): void
                            public invokeConstructor(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.commons.Method): void
                            public invokeStatic(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.commons.Method): void
                            public invokeInterface(arg0: jdk.internal.org.objectweb.asm.Type, arg1: jdk.internal.org.objectweb.asm.commons.Method): void
                            public invokeDynamic(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.internal.org.objectweb.asm.Handle, ...arg3: java.lang.Object[]): void
                            public newInstance(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public newArray(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public arrayLength(): void
                            public throwException(): void
                            public throwException(arg0: jdk.internal.org.objectweb.asm.Type, arg1: java.lang.String | string): void
                            public checkCast(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public instanceOf(arg0: jdk.internal.org.objectweb.asm.Type): void
                            public monitorEnter(): void
                            public monitorExit(): void
                            public endMethod(): void
                            public catchException(arg0: jdk.internal.org.objectweb.asm.Label, arg1: jdk.internal.org.objectweb.asm.Label, arg2: jdk.internal.org.objectweb.asm.Type): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}