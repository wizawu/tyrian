declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
class ConsAltNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node {
    public car: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public cdr: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
    public static newAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
    public static newListNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
    public static listAdd(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
    public toListNode(): void
    public toAltNode(): void
    public getType(): int
    protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
    protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public swap(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
    public verifyTree(arg0: java.util.Set<jdk.nashorn.internal.runtime.regexp.joni.ast.Node>, arg1: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback): void
    public setCar(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
    public setCdr(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode
    public getName(): string
    public toString(arg0: int): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}