declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                abstract class Property implements java.io.Serializable {
                    public static readonly WRITABLE_ENUMERABLE_CONFIGURABLE: int
                    public static readonly NOT_WRITABLE: int
                    public static readonly NOT_ENUMERABLE: int
                    public static readonly NOT_CONFIGURABLE: int
                    public static readonly IS_PARAMETER: int
                    public static readonly HAS_ARGUMENTS: int
                    public static readonly IS_FUNCTION_DECLARATION: int
                    public static readonly IS_NASGEN_PRIMITIVE: int
                    public static readonly IS_BUILTIN: int
                    public static readonly IS_BOUND: int
                    public static readonly NEEDS_DECLARATION: int
                    public static readonly IS_LEXICAL_BINDING: int
                    public static readonly DUAL_FIELDS: int
                    protected builtinSwitchPoint: java.lang.invoke.SwitchPoint
                    public abstract copy(): jdk.nashorn.internal.runtime.Property
                    public abstract copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    public setBuiltinSwitchPoint(arg0: java.lang.invoke.SwitchPoint): void
                    public getBuiltinSwitchPoint(): java.lang.invoke.SwitchPoint
                    public isBuiltin(): boolean
                    public hasGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public hasSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public isWritable(): boolean
                    public isConfigurable(): boolean
                    public isEnumerable(): boolean
                    public isParameter(): boolean
                    public hasArguments(): boolean
                    public isSpill(): boolean
                    public isBound(): boolean
                    public needsDeclaration(): boolean
                    public addFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public getFlags(): int
                    public removeFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public setFlags(arg0: int): jdk.nashorn.internal.runtime.Property
                    public abstract getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public abstract getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getKey(): string
                    public getSlot(): int
                    public abstract getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public abstract getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public abstract getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public abstract setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public abstract setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public abstract setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public abstract getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
                    public getGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public toStringShort(): string
                    public toString(): string
                    public getType(): java.lang.Class<any>
                    public setType(arg0: java.lang.Class<any>): void
                    protected getLocalType(): java.lang.Class<any>
                    public canChangeType(): boolean
                    public isFunctionDeclaration(): boolean
                    public isLexicalBinding(): boolean
                    public hasDualFields(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}