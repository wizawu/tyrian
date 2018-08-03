declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class RuntimeNode$Request extends java.lang.Enum<jdk.nashorn.internal.ir.RuntimeNode$Request> {
                    public static readonly ADD: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly DEBUGGER: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly NEW: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly TYPEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly REFERENCE_ERROR: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly SLOW_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly FAIL_DELETE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly EQ_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly EQ: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly GE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly GT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly IN: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly INSTANCEOF: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly LE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly LT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly NE_STRICT: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly NE: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly IS_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static readonly IS_NOT_UNDEFINED: jdk.nashorn.internal.ir.RuntimeNode$Request
                    public static values(): jdk.nashorn.internal.ir.RuntimeNode$Request[]
                    public static valueOf(arg0: java.lang.String | string): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public canSpecialize(): boolean
                    public getArity(): int
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public getTokenType(): jdk.nashorn.internal.parser.TokenType
                    public nonStrictName(): string
                    public static requestFor(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.RuntimeNode$Request
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