declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                abstract class Property implements java.io.Serializable {
                    public static WRITABLE_ENUMERABLE_CONFIGURABLE: int
                    public static NOT_WRITABLE: int
                    public static NOT_ENUMERABLE: int
                    public static NOT_CONFIGURABLE: int
                    public static IS_PARAMETER: int
                    public static HAS_ARGUMENTS: int
                    public static IS_FUNCTION_DECLARATION: int
                    public static IS_NASGEN_PRIMITIVE: int
                    public static IS_BUILTIN: int
                    public static IS_BOUND: int
                    public static NEEDS_DECLARATION: int
                    public static IS_LEXICAL_BINDING: int
                    public static DUAL_FIELDS: int
                    protected builtinSwitchPoint: java.lang.invoke.SwitchPoint
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
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
                    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getKey(): string
                    public getSlot(): int
                    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
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