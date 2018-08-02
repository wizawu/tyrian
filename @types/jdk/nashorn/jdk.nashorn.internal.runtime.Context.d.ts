declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class Context {
    public static NASHORN_SET_CONFIG: string
    public static NASHORN_CREATE_CONTEXT: string
    public static NASHORN_CREATE_GLOBAL: string
    public static NASHORN_GET_CONTEXT: string
    public static NASHORN_JAVA_REFLECTION: string
    public static NASHORN_DEBUG_MODE: string
    public static DEBUG: boolean
    public static getGlobal(): jdk.nashorn.internal.objects.Global
    public static setGlobal(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
    public static setGlobal(arg0: jdk.nashorn.internal.objects.Global): void
    public static getContext(): jdk.nashorn.internal.runtime.Context
    public static getCurrentErr(): java.io.PrintWriter
    public static err(arg0: java.lang.String | string): void
    public static err(arg0: java.lang.String | string, arg1: boolean): void
    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.lang.ClassLoader)
    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.lang.ClassLoader, arg3: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda)
    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.io.PrintWriter, arg3: java.io.PrintWriter, arg4: java.lang.ClassLoader)
    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: jdk.nashorn.internal.runtime.ErrorManager, arg2: java.io.PrintWriter, arg3: java.io.PrintWriter, arg4: java.lang.ClassLoader, arg5: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda)
    public getClassFilter(): jdk.nashorn.api.scripting.ClassFilter
    public getErrorManager(): jdk.nashorn.internal.runtime.ErrorManager
    public getEnv(): jdk.nashorn.internal.runtime.ScriptEnvironment
    public getOut(): java.io.PrintWriter
    public getErr(): java.io.PrintWriter
    public useDualFields(): boolean
    public static getGlobalMap(): jdk.nashorn.internal.runtime.PropertyMap
    public compileScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
    public compileScript(arg0: jdk.nashorn.internal.runtime.Source): jdk.nashorn.internal.runtime.Context$MultiGlobalCompiledScript
    public eval(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
    public eval(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: java.lang.Object, arg4: boolean, arg5: boolean): java.lang.Object
    public load(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public loadWithNewGlobal(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    public static forStructureClass(arg0: java.lang.String | string): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
    public static checkPackageAccess(arg0: java.lang.Class<any>): void
    public static checkPackageAccess(arg0: java.lang.String | string): void
    public static isStructureClass(arg0: java.lang.String | string): boolean
    public static isAccessibleClass(arg0: java.lang.Class<any>): boolean
    public findClass(arg0: java.lang.String | string): java.lang.Class<any>
    public static printStackTrace(arg0: java.lang.Throwable): void
    public verify(arg0: byte[]): void
    public createGlobal(): jdk.nashorn.internal.objects.Global
    public newGlobal(): jdk.nashorn.internal.objects.Global
    public initGlobal(arg0: jdk.nashorn.internal.objects.Global, arg1: javax.script.ScriptEngine): jdk.nashorn.internal.objects.Global
    public initGlobal(arg0: jdk.nashorn.internal.objects.Global): jdk.nashorn.internal.objects.Global
    public getLogger(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>): jdk.nashorn.internal.runtime.logging.DebugLogger
    public getLogger(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.util.function$.Consumer<jdk.nashorn.internal.runtime.logging.DebugLogger>): jdk.nashorn.internal.runtime.logging.DebugLogger
    public addLoggingToHandle(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.lang.invoke.MethodHandle, arg2: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): java.lang.invoke.MethodHandle
    public addLoggingToHandle(arg0: java.lang.Class<jdk.nashorn.internal.runtime.logging.Loggable>, arg1: java.util.logging.Level, arg2: java.lang.invoke.MethodHandle, arg3: int, arg4: boolean, arg5: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): java.lang.invoke.MethodHandle
    public newBuiltinSwitchPoint(arg0: java.lang.String | string): java.lang.invoke.SwitchPoint
    public getBuiltinSwitchPoint(arg0: java.lang.String | string): java.lang.invoke.SwitchPoint
    public static class: java.lang.Class<any>
}

            }
        }
    }
}