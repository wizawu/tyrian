declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class JSType extends java.lang.Enum<jdk.nashorn.internal.runtime.JSType> {
                    public static readonly UNDEFINED: jdk.nashorn.internal.runtime.JSType
                    public static readonly NULL: jdk.nashorn.internal.runtime.JSType
                    public static readonly BOOLEAN: jdk.nashorn.internal.runtime.JSType
                    public static readonly NUMBER: jdk.nashorn.internal.runtime.JSType
                    public static readonly STRING: jdk.nashorn.internal.runtime.JSType
                    public static readonly OBJECT: jdk.nashorn.internal.runtime.JSType
                    public static readonly FUNCTION: jdk.nashorn.internal.runtime.JSType
                    public static readonly MAX_UINT: long
                    public static readonly TO_BOOLEAN: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_BOOLEAN_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_INTEGER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_LONG: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_LONG_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_NUMBER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_NUMBER_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_INT32: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_INT32_L: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_INT32_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_INT32_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_UINT32_OPTIMISTIC: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_UINT32_DOUBLE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_UINT32: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_UINT32_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_STRING_D: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_PRIMITIVE_TO_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_PRIMITIVE_TO_CHARSEQUENCE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly THROW_UNWARRANTED: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly ADD_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly SUB_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly MUL_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly DIV_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly DIV_ZERO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly REM_ZERO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly REM_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly DECREMENT_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly INCREMENT_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly NEGATE_EXACT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_JAVA_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly VOID_RETURN: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly IS_STRING: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly IS_NUMBER: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TYPE_UNDEFINED_INDEX: int
                    public static readonly TYPE_INT_INDEX: int
                    public static readonly TYPE_DOUBLE_INDEX: int
                    public static readonly TYPE_OBJECT_INDEX: int
                    public static readonly CONVERT_OBJECT: java.util.List<java.lang.invoke.MethodHandle>
                    public static readonly CONVERT_OBJECT_OPTIMISTIC: java.util.List<java.lang.invoke.MethodHandle>
                    public static readonly UNDEFINED_INT: int
                    public static readonly UNDEFINED_LONG: long
                    public static readonly UNDEFINED_DOUBLE: double
                    public static readonly GET_UNDEFINED: java.util.List<java.lang.invoke.MethodHandle>
                    public static values(): jdk.nashorn.internal.runtime.JSType[]
                    public static valueOf(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.JSType
                    public typeName(): string
                    public static of(arg0: java.lang.Object): jdk.nashorn.internal.runtime.JSType
                    public static ofNoFunction(arg0: java.lang.Object): jdk.nashorn.internal.runtime.JSType
                    public static voidReturn(): void
                    public static isRepresentableAsInt(arg0: long): boolean
                    public static isRepresentableAsInt(arg0: double): boolean
                    public static isStrictlyRepresentableAsInt(arg0: double): boolean
                    public static isRepresentableAsInt(arg0: java.lang.Object): boolean
                    public static isRepresentableAsLong(arg0: double): boolean
                    public static isRepresentableAsDouble(arg0: long): boolean
                    public static isPrimitive(arg0: java.lang.Object): boolean
                    public static toPrimitive(arg0: java.lang.Object): java.lang.Object
                    public static toPrimitive(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static toPrimitive(arg0: jdk.nashorn.api.scripting.JSObject, arg1: java.lang.Class<any>): java.lang.Object
                    public static toPrimitiveToString(arg0: java.lang.Object): string
                    public static toPrimitiveToCharSequence(arg0: java.lang.Object): java.lang.CharSequence
                    public static toBoolean(arg0: double): boolean
                    public static toBoolean(arg0: java.lang.Object): boolean
                    public static toString(arg0: java.lang.Object): string
                    public static toCharSequence(arg0: java.lang.Object): java.lang.CharSequence
                    public static isString(arg0: java.lang.Object): boolean
                    public static isNumber(arg0: java.lang.Object): boolean
                    public static toString(arg0: int): string
                    public static toString(arg0: double): string
                    public static toString(arg0: double, arg1: int): string
                    public static toNumber(arg0: java.lang.Object): double
                    public static toNumberForEq(arg0: java.lang.Object): double
                    public static toNumberForStrictEq(arg0: java.lang.Object): double
                    public static toNarrowestNumber(arg0: long): java.lang.Number
                    public static toNumber(arg0: java.lang.Boolean | boolean): double
                    public static toNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): double
                    public static toNumberOptimistic(arg0: java.lang.Object, arg1: int): double
                    public static toNumberMaybeOptimistic(arg0: java.lang.Object, arg1: int): double
                    public static digit(arg0: char, arg1: int): int
                    public static digit(arg0: char, arg1: int, arg2: boolean): int
                    public static toNumber(arg0: java.lang.String | string): double
                    public static toInteger(arg0: java.lang.Object): int
                    public static toLong(arg0: java.lang.Object): long
                    public static toLong(arg0: double): long
                    public static toInt32(arg0: java.lang.Object): int
                    public static toInt32Optimistic(arg0: java.lang.Object, arg1: int): int
                    public static toInt32MaybeOptimistic(arg0: java.lang.Object, arg1: int): int
                    public static toInt32(arg0: long): int
                    public static toInt32(arg0: double): int
                    public static toUint32(arg0: java.lang.Object): long
                    public static toUint32(arg0: double): long
                    public static toUint32(arg0: int): long
                    public static toUint32Optimistic(arg0: int, arg1: int): int
                    public static toUint32Double(arg0: int): double
                    public static toUint16(arg0: java.lang.Object): int
                    public static toUint16(arg0: int): int
                    public static toUint16(arg0: long): int
                    public static toUint16(arg0: double): int
                    public static isFinite(arg0: double): boolean
                    public static toDouble(arg0: double): java.lang.Double
                    public static toDouble(arg0: long): java.lang.Double
                    public static toDouble(arg0: int): java.lang.Double
                    public static toObject(arg0: boolean): java.lang.Object
                    public static toObject(arg0: int): java.lang.Object
                    public static toObject(arg0: long): java.lang.Object
                    public static toObject(arg0: double): java.lang.Object
                    public static toObject(arg0: java.lang.Object): java.lang.Object
                    public static toScriptObject(arg0: java.lang.Object): java.lang.Object
                    public static toScriptObject(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Object): java.lang.Object
                    public static toJavaArray(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static convertArray(arg0: java.lang.Object[], arg1: java.lang.Class<any>): java.lang.Object
                    public static nullOrUndefined(arg0: java.lang.Object): boolean
                    public static addExact(arg0: int, arg1: int, arg2: int): int
                    public static subExact(arg0: int, arg1: int, arg2: int): int
                    public static mulExact(arg0: int, arg1: int, arg2: int): int
                    public static divExact(arg0: int, arg1: int, arg2: int): int
                    public static divZero(arg0: int, arg1: int): int
                    public static remZero(arg0: int, arg1: int): int
                    public static remExact(arg0: int, arg1: int, arg2: int): int
                    public static decrementExact(arg0: int, arg1: int): int
                    public static incrementExact(arg0: int, arg1: int): int
                    public static negateExact(arg0: int, arg1: int): int
                    public static getAccessorTypeIndex(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): int
                    public static getAccessorTypeIndex(arg0: java.lang.Class<any>): int
                    public static getAccessorType(arg0: int): jdk.nashorn.internal.codegen.types.Type
                    public static getNumberOfAccessorTypes(): int
                    public static unboxConstant(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public static unboxedFieldType(arg0: java.lang.Object): java.lang.Class<any>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}