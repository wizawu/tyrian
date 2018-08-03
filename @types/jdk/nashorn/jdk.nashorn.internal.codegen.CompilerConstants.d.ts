declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class CompilerConstants extends java.lang.Enum<jdk.nashorn.internal.codegen.CompilerConstants> {
                    public static readonly __FILE__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly __DIR__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly __LINE__: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly INIT: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly CLINIT: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly EVAL: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SOURCE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly CONSTANTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly STRICT_MODE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly DEFAULT_SCRIPT_NAME: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ANON_FUNCTION_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly NESTED_FUNCTION_SEPARATOR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ID_FUNCTION_SEPARATOR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly PROGRAM: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly CREATE_PROGRAM_FUNCTION: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly THIS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly THIS_DEBUGGER: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SCOPE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly RETURN: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly CALLEE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly VARARGS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ARGUMENTS_VAR: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ARGUMENTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly EXPLODED_ARGUMENT_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ITERATOR_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SWITCH_TAG_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly EXCEPTION_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly QUICK_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly TEMP_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly LITERAL_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly REGEX_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly JAVA_THIS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly INIT_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly INIT_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly INIT_ARGUMENTS: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly JS_OBJECT_DUAL_FIELD_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly JS_OBJECT_SINGLE_FIELD_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly ALLOCATE: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SPLIT_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SPLIT_ARRAY_ARG: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly GET_STRING: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly GET_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly SET_MAP: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly GET_ARRAY_PREFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static readonly GET_ARRAY_SUFFIX: jdk.nashorn.internal.codegen.CompilerConstants
                    public static values(): jdk.nashorn.internal.codegen.CompilerConstants[]
                    public static valueOf(arg0: java.lang.String | string): jdk.nashorn.internal.codegen.CompilerConstants
                    public static isCompilerConstant(arg0: java.lang.String | string): boolean
                    public symbolName(): string
                    public type(): java.lang.Class<any>
                    public slot(): int
                    public descriptor(): string
                    public static className(arg0: java.lang.Class<any>): string
                    public static methodDescriptor(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): string
                    public static typeDescriptor(arg0: java.lang.Class<any>): string
                    public static constructorNoLookup(arg0: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static constructorNoLookup(arg0: java.lang.String | string, ...arg1: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static constructorNoLookup(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCallNoLookup(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCallNoLookup(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static staticCallNoLookup(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static staticCallNoLookup(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualCallNoLookup(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static interfaceCallNoLookup(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualField(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static virtualField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticField(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public static staticCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static virtualCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static specialCall(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Class<any>, ...arg4: java.lang.Class<any>[]): jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static isInternalMethodName(arg0: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}