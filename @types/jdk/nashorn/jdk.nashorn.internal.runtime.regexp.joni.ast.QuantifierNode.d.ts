declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
class QuantifierNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.StateNode {
    public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public lower: int
    public upper: int
    public greedy: boolean
    public targetEmptyInfo: int
    public headExact: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public nextHeadExact: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public isRefered: boolean
    public static REPEAT_INFINITE: int
    public constructor(arg0: int, arg1: int, arg2: boolean)
    public getType(): int
    protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
    protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
    public convertToString(arg0: int): jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
    public getName(): string
    public toString(arg0: int): string
    public isAnyCharStar(): boolean
    protected popularNum(): int
    protected set(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
    public reduceNestedQuantifier(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
    public setQuantifier(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg3: char[], arg4: int, arg5: int): int
    public static isRepeatInfinite(arg0: int): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}