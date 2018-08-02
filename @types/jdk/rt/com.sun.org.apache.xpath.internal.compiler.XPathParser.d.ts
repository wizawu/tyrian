declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace compiler {
class XPathParser {
    public static CONTINUE_AFTER_FATAL_ERROR: string
    protected static FILTER_MATCH_FAILED: int
    protected static FILTER_MATCH_PRIMARY: int
    protected static FILTER_MATCH_PREDICATES: int
    public constructor(arg0: javax.xml.transform.ErrorListener, arg1: javax.xml.transform.SourceLocator)
    public initXPath(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
    public initMatchPattern(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
    public setErrorHandler(arg0: javax.xml.transform.ErrorListener): void
    public getErrorListener(): javax.xml.transform.ErrorListener
    protected dumpRemainingTokenQueue(): string
    protected Expr(): void
    protected OrExpr(): void
    protected AndExpr(): void
    protected EqualityExpr(arg0: int): int
    protected RelationalExpr(arg0: int): int
    protected AdditiveExpr(arg0: int): int
    protected MultiplicativeExpr(arg0: int): int
    protected UnaryExpr(): void
    protected StringExpr(): void
    protected BooleanExpr(): void
    protected NumberExpr(): void
    protected UnionExpr(): void
    protected PathExpr(): void
    protected FilterExpr(): int
    protected PrimaryExpr(): boolean
    protected Argument(): void
    protected FunctionCall(): boolean
    protected LocationPath(): void
    protected RelativeLocationPath(): boolean
    protected Step(): boolean
    protected Basis(): void
    protected AxisName(): int
    protected NodeTest(arg0: int): void
    protected Predicate(): void
    protected PredicateExpr(): void
    protected QName(): void
    protected NCName(): void
    protected Literal(): void
    protected Number(): void
    protected Pattern(): void
    protected LocationPathPattern(): void
    protected IdKeyPattern(): void
    protected RelativePathPattern(): void
    protected StepPattern(arg0: boolean): boolean
    protected AbbreviatedNodeTestStep(arg0: boolean): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}