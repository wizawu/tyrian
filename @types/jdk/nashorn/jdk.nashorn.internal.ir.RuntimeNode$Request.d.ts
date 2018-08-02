declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class RuntimeNode$Request extends java.lang.Enum<jdk.nashorn.internal.ir.RuntimeNode$Request> {
                    public static ADD: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static DEBUGGER: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NEW: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static TYPEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static REFERENCE_ERROR: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static SLOW_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static FAIL_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static EQ_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static EQ: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static GE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static GT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IN: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static INSTANCEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static LE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static LT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NE_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static NE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IS_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static IS_NOT_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static values(): jdk.nashorn.internal.ir.RuntimeNode$Request[]
                    public static valueOf(arg0: java.lang.String | string): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public canSpecialize(): boolean
                    public getArity(): int
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public getTokenType(): jdk.nashorn.internal.parser.TokenType
                    public nonStrictName(): string
                    public static requestFor(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static isUndefinedCheck(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isEQ(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isNE(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static isStrict(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static reverse(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static invert(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static isComparison(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}