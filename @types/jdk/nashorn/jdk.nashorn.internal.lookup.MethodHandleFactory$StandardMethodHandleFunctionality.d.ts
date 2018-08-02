declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace lookup {
class MethodHandleFactory$StandardMethodHandleFunctionality implements jdk.nashorn.internal.lookup.MethodHandleFunctionality , jdk.nashorn.internal.runtime.logging.Loggable {
    public constructor()
    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
    protected static describe(...arg0: java.lang.Object[]): string
    public debug(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
    public filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
    public filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    public guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    public insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
    public dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
    public dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
    public asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public bindTo(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): java.lang.invoke.MethodHandle
    public foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    public explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public arrayElementGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public arrayElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public throwException(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
    public catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    public constant(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
    public identity(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public asCollector(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
    public asSpreader(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
    public getter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public staticGetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public setter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public staticSetter(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public find(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
    public findStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public findSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType, arg4: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public findVirtual(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public createSwitchPoint(): java.lang.invoke.SwitchPoint
    public guardWithTest(arg0: java.lang.invoke.SwitchPoint, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
    public type(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
    public static class: java.lang.Class<any>
}

            }
        }
    }
}