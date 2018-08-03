declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class XPathParser extends com.sun.java_cup.internal.runtime.lr_parser {
                                    protected static readonly _production_table: short[][]
                                    protected static readonly _action_table: short[][]
                                    protected static readonly _reduce_table: short[][]
                                    protected action_obj: com.sun.org.apache.xalan.internal.xsltc.compiler.CUP$XPathParser$actions
                                    public static readonly EmptyArgs: java.util.Vector
                                    public static readonly DummyVarRef: com.sun.org.apache.xalan.internal.xsltc.compiler.VariableRef
                                    public _symbolTable: com.sun.org.apache.xalan.internal.xsltc.compiler.SymbolTable
                                    public constructor()
                                    public constructor(arg0: com.sun.java_cup.internal.runtime.Scanner | com.sun.java_cup.internal.runtime.Scanner$$Lambda)
                                    public production_table(): short[][]
                                    public action_table(): short[][]
                                    public reduce_table(): short[][]
                                    protected init_actions(): void
                                    public do_action(arg0: int, arg1: com.sun.java_cup.internal.runtime.lr_parser, arg2: java.util.Stack, arg3: int): com.sun.java_cup.internal.runtime.Symbol
                                    public start_state(): int
                                    public start_production(): int
                                    public EOF_sym(): int
                                    public error_sym(): int
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Parser)
                                    public getLineNumber(): int
                                    public getQNameIgnoreDefaultNs(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    public getQName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.compiler.QName
                                    public setMultiDocument(arg0: boolean): void
                                    public setCallsNodeset(arg0: boolean): void
                                    public setHasIdCall(arg0: boolean): void
                                    public createStepPattern(arg0: int, arg1: java.lang.Object, arg2: java.util.Vector): com.sun.org.apache.xalan.internal.xsltc.compiler.StepPattern
                                    public findNodeType(arg0: int, arg1: java.lang.Object): int
                                    public parse(arg0: java.lang.String | string, arg1: int): com.sun.java_cup.internal.runtime.Symbol
                                    public addError(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg): void
                                    public report_error(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public report_fatal_error(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public insertStep(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Step, arg1: com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath): com.sun.org.apache.xalan.internal.xsltc.compiler.RelativeLocationPath
                                    public isElementAxis(arg0: int): boolean
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}