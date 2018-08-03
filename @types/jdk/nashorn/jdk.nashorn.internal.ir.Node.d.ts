declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class Node implements java.lang.Cloneable , java.io.Serializable {
                    public static readonly NO_LINE_NUMBER: int
                    public static readonly NO_TOKEN: long
                    public static readonly NO_FINISH: int
                    protected readonly start: int
                    protected finish: int
                    public constructor(arg0: long, arg1: int)
                    protected constructor(arg0: long, arg1: int, arg2: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.Node)
                    public isLoop(): boolean
                    public isAssignment(): boolean
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public abstract accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(): string
                    public toString(arg0: boolean): string
                    public toString(arg0: java.lang.StringBuilder): void
                    public abstract toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFinish(): int
                    public setFinish(arg0: int): void
                    public getStart(): int
                    protected clone(): java.lang.Object
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public position(): int
                    public length(): int
                    public tokenType(): jdk.nashorn.internal.parser.TokenType
                    public isTokenType(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    public getToken(): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}