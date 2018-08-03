declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ScriptRuntime {
                    public static readonly EMPTY_ARRAY: java.lang.Object[]
                    public static readonly UNDEFINED: jdk.nashorn.internal.runtime.Undefined
                    public static readonly EMPTY: jdk.nashorn.internal.runtime.Undefined
                    public static readonly ADD: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly EQ_STRICT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly OPEN_WITH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly MERGE_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_PROPERTY_ITERATOR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_VALUE_ITERATOR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly APPLY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly THROW_REFERENCE_ERROR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly THROW_CONST_TYPE_ERROR: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly INVALIDATE_RESERVED_BUILTIN_NAME: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static switchTagAsInt(arg0: java.lang.Object, arg1: int): int
                    public static switchTagAsInt(arg0: boolean, arg1: int): int
                    public static switchTagAsInt(arg0: long, arg1: int): int
                    public static switchTagAsInt(arg0: double, arg1: int): int
                    public static builtinObjectToString(arg0: java.lang.Object): string
                    public static safeToString(arg0: java.lang.Object): string
                    public static toPropertyIterator(arg0: java.lang.Object): java.util.Iterator<any>
                    public static toValueIterator(arg0: java.lang.Object): java.util.Iterator<any>
                    public static mergeScope(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptObject
                    public static apply(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public static throwReferenceError(arg0: java.lang.String | string): void
                    public static throwConstTypeError(arg0: java.lang.String | string): void
                    public static construct(arg0: jdk.nashorn.internal.runtime.ScriptFunction, ...arg1: java.lang.Object[]): java.lang.Object
                    public static sameValue(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static parse(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
                    public static isJSWhitespace(arg0: char): boolean
                    public static openWith(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static ADD(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static DEBUGGER(): java.lang.Object
                    public static NEW(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static TYPEOF(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static REFERENCE_ERROR(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static DELETE(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static SLOW_DELETE(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static FAIL_DELETE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static EQ(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static NE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static EQ_STRICT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static NE_STRICT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static IN(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static INSTANCEOF(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static LT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static GT(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static LE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static GE(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static invalidateReservedBuiltinName(arg0: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}