declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class Global extends jdk.nashorn.internal.runtime.Scope {
                    public arguments: java.lang.Object
                    public parseInt: java.lang.Object
                    public parseFloat: java.lang.Object
                    public isNaN: java.lang.Object
                    public isFinite: java.lang.Object
                    public encodeURI: java.lang.Object
                    public encodeURIComponent: java.lang.Object
                    public decodeURI: java.lang.Object
                    public decodeURIComponent: java.lang.Object
                    public escape: java.lang.Object
                    public unescape: java.lang.Object
                    public print: java.lang.Object
                    public load: java.lang.Object
                    public loadWithNewGlobal: java.lang.Object
                    public exit: java.lang.Object
                    public quit: java.lang.Object
                    public static NaN: double
                    public static Infinity: double
                    public static undefined: java.lang.Object
                    public eval: java.lang.Object
                    public object: java.lang.Object
                    public function: java.lang.Object
                    public array: java.lang.Object
                    public string: java.lang.Object
                    public _boolean: java.lang.Object
                    public number: java.lang.Object
                    public math: java.lang.Object
                    public error: java.lang.Object
                    public referenceError: java.lang.Object
                    public syntaxError: java.lang.Object
                    public typeError: java.lang.Object
                    public packages: java.lang.Object
                    public com: java.lang.Object
                    public edu: java.lang.Object
                    public java: java.lang.Object
                    public javafx: java.lang.Object
                    public javax: java.lang.Object
                    public org: java.lang.Object
                    public static __FILE__: java.lang.Object
                    public static __DIR__: java.lang.Object
                    public static __LINE__: java.lang.Object
                    public static getDate(arg0: java.lang.Object): java.lang.Object
                    public static setDate(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getRegExp(arg0: java.lang.Object): java.lang.Object
                    public static setRegExp(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJSON(arg0: java.lang.Object): java.lang.Object
                    public static setJSON(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJSAdapter(arg0: java.lang.Object): java.lang.Object
                    public static setJSAdapter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getEvalError(arg0: java.lang.Object): java.lang.Object
                    public static setEvalError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getRangeError(arg0: java.lang.Object): java.lang.Object
                    public static setRangeError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getURIError(arg0: java.lang.Object): java.lang.Object
                    public static setURIError(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getArrayBuffer(arg0: java.lang.Object): java.lang.Object
                    public static setArrayBuffer(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getDataView(arg0: java.lang.Object): java.lang.Object
                    public static setDataView(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt8Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt8Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint8Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint8Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint8ClampedArray(arg0: java.lang.Object): java.lang.Object
                    public static setUint8ClampedArray(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt16Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt16Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint16Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint16Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getInt32Array(arg0: java.lang.Object): java.lang.Object
                    public static setInt32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getUint32Array(arg0: java.lang.Object): java.lang.Object
                    public static setUint32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getFloat32Array(arg0: java.lang.Object): java.lang.Object
                    public static setFloat32Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getFloat64Array(arg0: java.lang.Object): java.lang.Object
                    public static setFloat64Array(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJavaImporter(arg0: java.lang.Object): java.lang.Object
                    public static setJavaImporter(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getJavaApi(arg0: java.lang.Object): java.lang.Object
                    public static setJavaApi(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public setScriptContext(arg0: javax.script.ScriptContext): void
                    public getScriptContext(): javax.script.ScriptContext
                    public setInitScriptContext(arg0: javax.script.ScriptContext): void
                    protected getContext(): jdk.nashorn.internal.runtime.Context
                    protected useDualFields(): boolean
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context)
                    public static instance(): jdk.nashorn.internal.objects.Global
                    public static hasInstance(): boolean
                    public getClassFilter(): jdk.nashorn.api.scripting.ClassFilter
                    public isOfContext(arg0: jdk.nashorn.internal.runtime.Context): boolean
                    public isStrictContext(): boolean
                    public initBuiltinObjects(arg0: javax.script.ScriptEngine): void
                    public wrapAsObject(arg0: java.lang.Object): java.lang.Object
                    public static primitiveLookup(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public static getPrimitiveWrapFilter(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public newObject(): jdk.nashorn.internal.runtime.ScriptObject
                    public getDefaultValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Class<any>): java.lang.Object
                    public isError(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public newError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newEvalError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newRangeError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newReferenceError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newSyntaxError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newTypeError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newURIError(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.ScriptObject
                    public newGenericDescriptor(arg0: boolean, arg1: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public newDataDescriptor(arg0: java.lang.Object, arg1: boolean, arg2: boolean, arg3: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public newAccessorDescriptor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: boolean, arg3: boolean): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public getInvokeByName(arg0: java.lang.Object, arg1: java.util.concurrent.Callable<jdk.nashorn.internal.runtime.linker.InvokeByName> | java.util.concurrent.Callable$$Lambda<jdk.nashorn.internal.runtime.linker.InvokeByName>): jdk.nashorn.internal.runtime.linker.InvokeByName
                    public getDynamicInvoker(arg0: java.lang.Object, arg1: java.util.concurrent.Callable<java.lang.invoke.MethodHandle> | java.util.concurrent.Callable$$Lambda<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle
                    public static __noSuchProperty__(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static eval(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static directEval(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: boolean): java.lang.Object
                    public static print(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static println(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static load(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static loadWithNewGlobal(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static exit(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public getObjectPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public getFunctionPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public getTypeErrorThrower(): jdk.nashorn.internal.runtime.ScriptFunction
                    public static getBuiltinFunctionApplySwitchPoint(): java.lang.invoke.SwitchPoint
                    public static isBuiltinFunctionPrototypeApply(): boolean
                    public static isBuiltinFunctionPrototypeCall(): boolean
                    public getClassName(): string
                    public static regExpCopy(arg0: java.lang.Object): java.lang.Object
                    public static toRegExp(arg0: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
                    public static toObject(arg0: java.lang.Object): java.lang.Object
                    public static allocate(arg0: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocate(arg0: double[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocate(arg0: int[]): jdk.nashorn.internal.objects.NativeArray
                    public static allocateArguments(arg0: java.lang.Object[], arg1: java.lang.Object, arg2: int): jdk.nashorn.internal.runtime.ScriptObject
                    public static isEval(arg0: java.lang.Object): boolean
                    public static replaceLocationPropertyPlaceholder(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static isLocationPropertyPlaceholder(arg0: java.lang.Object): boolean
                    public static newRegExp(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                    public static objectPrototype(): jdk.nashorn.internal.runtime.ScriptObject
                    public static newEmptyInstance(): jdk.nashorn.internal.runtime.ScriptObject
                    public static checkObject(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static checkObjectCoercible(arg0: java.lang.Object): void
                    public getLexicalScope(): jdk.nashorn.internal.runtime.ScriptObject
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    public findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findProperty(arg0: java.lang.String | string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    public findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public addShellBuiltins(): void
                    protected isGlobal(): boolean
                    public static $clinit$(): void
                    public G$arguments(): java.lang.Object
                    public S$arguments(arg0: java.lang.Object): void
                    public G$parseInt(): java.lang.Object
                    public S$parseInt(arg0: java.lang.Object): void
                    public G$parseFloat(): java.lang.Object
                    public S$parseFloat(arg0: java.lang.Object): void
                    public G$isNaN(): java.lang.Object
                    public S$isNaN(arg0: java.lang.Object): void
                    public G$isFinite(): java.lang.Object
                    public S$isFinite(arg0: java.lang.Object): void
                    public G$encodeURI(): java.lang.Object
                    public S$encodeURI(arg0: java.lang.Object): void
                    public G$encodeURIComponent(): java.lang.Object
                    public S$encodeURIComponent(arg0: java.lang.Object): void
                    public G$decodeURI(): java.lang.Object
                    public S$decodeURI(arg0: java.lang.Object): void
                    public G$decodeURIComponent(): java.lang.Object
                    public S$decodeURIComponent(arg0: java.lang.Object): void
                    public G$escape(): java.lang.Object
                    public S$escape(arg0: java.lang.Object): void
                    public G$unescape(): java.lang.Object
                    public S$unescape(arg0: java.lang.Object): void
                    public G$print(): java.lang.Object
                    public S$print(arg0: java.lang.Object): void
                    public G$load(): java.lang.Object
                    public S$load(arg0: java.lang.Object): void
                    public G$loadWithNewGlobal(): java.lang.Object
                    public S$loadWithNewGlobal(arg0: java.lang.Object): void
                    public G$exit(): java.lang.Object
                    public S$exit(arg0: java.lang.Object): void
                    public G$quit(): java.lang.Object
                    public S$quit(arg0: java.lang.Object): void
                    public G$NaN(): double
                    public G$Infinity(): double
                    public G$undefined(): java.lang.Object
                    public G$eval(): java.lang.Object
                    public S$eval(arg0: java.lang.Object): void
                    public G$object(): java.lang.Object
                    public S$object(arg0: java.lang.Object): void
                    public G$function(): java.lang.Object
                    public S$function(arg0: java.lang.Object): void
                    public G$array(): java.lang.Object
                    public S$array(arg0: java.lang.Object): void
                    public G$string(): java.lang.Object
                    public S$string(arg0: java.lang.Object): void
                    public G$_boolean(): java.lang.Object
                    public S$_boolean(arg0: java.lang.Object): void
                    public G$number(): java.lang.Object
                    public S$number(arg0: java.lang.Object): void
                    public G$math(): java.lang.Object
                    public S$math(arg0: java.lang.Object): void
                    public G$error(): java.lang.Object
                    public S$error(arg0: java.lang.Object): void
                    public G$referenceError(): java.lang.Object
                    public S$referenceError(arg0: java.lang.Object): void
                    public G$syntaxError(): java.lang.Object
                    public S$syntaxError(arg0: java.lang.Object): void
                    public G$typeError(): java.lang.Object
                    public S$typeError(arg0: java.lang.Object): void
                    public G$packages(): java.lang.Object
                    public S$packages(arg0: java.lang.Object): void
                    public G$com(): java.lang.Object
                    public S$com(arg0: java.lang.Object): void
                    public G$edu(): java.lang.Object
                    public S$edu(arg0: java.lang.Object): void
                    public G$java(): java.lang.Object
                    public S$java(arg0: java.lang.Object): void
                    public G$javafx(): java.lang.Object
                    public S$javafx(arg0: java.lang.Object): void
                    public G$javax(): java.lang.Object
                    public S$javax(arg0: java.lang.Object): void
                    public G$org(): java.lang.Object
                    public S$org(arg0: java.lang.Object): void
                    public G$__FILE__(): java.lang.Object
                    public G$__DIR__(): java.lang.Object
                    public G$__LINE__(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}