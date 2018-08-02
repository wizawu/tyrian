declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace lookup {
interface MethodHandleFunctionality {
    filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
    filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
    dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
    dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
    foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    arrayElementGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    arrayElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    throwException(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
    catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    constant(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
    identity(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    asCollector(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
    asSpreader(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
    bindTo(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): java.lang.invoke.MethodHandle
    getter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    staticGetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    setter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    staticSetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    find(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
    findStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    findVirtual(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    findSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType, arg4: java.lang.Class<any>): java.lang.invoke.MethodHandle
    createSwitchPoint(): java.lang.invoke.SwitchPoint
    guardWithTest(arg0: java.lang.invoke.SwitchPoint, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    type(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
}

            }
        }
    }
}