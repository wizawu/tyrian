declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class LiteralNode<T> extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.PropertyKey {
                    protected value: T
                    public static POSTSET_MARKER: java.lang.Object
                    protected constructor(arg0: long, arg1: int, arg2: T)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LiteralNode<T>)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LiteralNode<T>, arg1: T)
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode<any>
                    public isNull(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getPropertyName(): string
                    public getBoolean(): boolean
                    public getInt32(): int
                    public getUint32(): long
                    public getLong(): long
                    public getNumber(): double
                    public getString(): string
                    public getObject(): java.lang.Object
                    public isString(): boolean
                    public isNumeric(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getValue(): T
                    public static newInstance(arg0: long, arg1: int): jdk.nashorn.internal.ir.LiteralNode<java.lang.Object>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.LiteralNode<java.lang.Object>
                    public static newInstance(arg0: long, arg1: int, arg2: boolean): jdk.nashorn.internal.ir.LiteralNode<java.lang.Boolean>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: boolean): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: java.lang.Number): jdk.nashorn.internal.ir.LiteralNode<java.lang.Number>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: java.lang.Number): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.runtime.Undefined): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.runtime.Undefined>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: jdk.nashorn.internal.runtime.Undefined): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: java.lang.String | string): jdk.nashorn.internal.ir.LiteralNode<java.lang.String>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: java.lang.String | string): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.parser.Lexer$LexerToken): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.parser.Lexer$LexerToken>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: jdk.nashorn.internal.parser.Lexer$LexerToken): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static objectAsConstant(arg0: java.lang.Object): java.lang.Object
                    public static isConstant(arg0: java.lang.Object): boolean
                    public static newInstance(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]>
                    public static newInstance(arg0: jdk.nashorn.internal.ir.Node, arg1: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static newInstance(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression[]): jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}