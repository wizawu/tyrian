declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodTypeForm {
                public static readonly NO_CHANGE: int
                public static readonly ERASE: int
                public static readonly WRAP: int
                public static readonly UNWRAP: int
                public static readonly INTS: int
                public static readonly LONGS: int
                public static readonly RAW_RETURN: int
                public erasedType(): java.lang.invoke.MethodType
                public basicType(): java.lang.invoke.MethodType
                public cachedMethodHandle(arg0: int): java.lang.invoke.MethodHandle
                public setCachedMethodHandle(arg0: int, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public cachedLambdaForm(arg0: int): java.lang.invoke.LambdaForm
                public setCachedLambdaForm(arg0: int, arg1: java.lang.invoke.LambdaForm): java.lang.invoke.LambdaForm
                protected constructor(arg0: java.lang.invoke.MethodType)
                public parameterCount(): int
                public parameterSlotCount(): int
                public returnCount(): int
                public returnSlotCount(): int
                public primitiveParameterCount(): int
                public longPrimitiveParameterCount(): int
                public primitiveReturnCount(): int
                public longPrimitiveReturnCount(): int
                public hasPrimitives(): boolean
                public hasNonVoidPrimitives(): boolean
                public hasLongPrimitives(): boolean
                public parameterToArgSlot(arg0: int): int
                public argSlotToParameter(arg0: int): int
                public static canonicalize(arg0: java.lang.invoke.MethodType, arg1: int, arg2: int): java.lang.invoke.MethodType
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}