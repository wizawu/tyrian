declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace compiler {
class Compiler extends com.sun.org.apache.xpath.internal.compiler.OpMap {
    public constructor(arg0: javax.xml.transform.ErrorListener, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xpath.internal.compiler.FunctionTable)
    public constructor()
    public compile(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected or(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected and(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected notequals(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected equals(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected lte(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected lt(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected gte(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected gt(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected plus(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected minus(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected mult(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected div(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected mod(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected neg(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected string(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected bool(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected number(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected literal(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected numberlit(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected variable(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected group(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected arg(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected union(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public getLocationPathDepth(): int
    public locationPath(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public predicate(arg0: int): com.sun.org.apache.xpath.internal.Expression
    protected matchPattern(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public locationPathPattern(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public getWhatToShow(arg0: int): int
    protected stepPattern(arg0: int, arg1: int, arg2: com.sun.org.apache.xpath.internal.patterns.StepPattern): com.sun.org.apache.xpath.internal.patterns.StepPattern
    public getCompiledPredicates(arg0: int): com.sun.org.apache.xpath.internal.Expression[]
    public countPredicates(arg0: int): int
    public warn(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public assertion(arg0: boolean, arg1: java.lang.String | string): void
    public error(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public getNamespaceContext(): com.sun.org.apache.xml.internal.utils.PrefixResolver
    public setNamespaceContext(arg0: com.sun.org.apache.xml.internal.utils.PrefixResolver): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}