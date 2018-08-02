declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xpath {
                                class XPath$Tokens {
                                    public static EXPRTOKEN_OPEN_PAREN: int
                                    public static EXPRTOKEN_CLOSE_PAREN: int
                                    public static EXPRTOKEN_OPEN_BRACKET: int
                                    public static EXPRTOKEN_CLOSE_BRACKET: int
                                    public static EXPRTOKEN_PERIOD: int
                                    public static EXPRTOKEN_DOUBLE_PERIOD: int
                                    public static EXPRTOKEN_ATSIGN: int
                                    public static EXPRTOKEN_COMMA: int
                                    public static EXPRTOKEN_DOUBLE_COLON: int
                                    public static EXPRTOKEN_NAMETEST_ANY: int
                                    public static EXPRTOKEN_NAMETEST_NAMESPACE: int
                                    public static EXPRTOKEN_NAMETEST_QNAME: int
                                    public static EXPRTOKEN_NODETYPE_COMMENT: int
                                    public static EXPRTOKEN_NODETYPE_TEXT: int
                                    public static EXPRTOKEN_NODETYPE_PI: int
                                    public static EXPRTOKEN_NODETYPE_NODE: int
                                    public static EXPRTOKEN_OPERATOR_AND: int
                                    public static EXPRTOKEN_OPERATOR_OR: int
                                    public static EXPRTOKEN_OPERATOR_MOD: int
                                    public static EXPRTOKEN_OPERATOR_DIV: int
                                    public static EXPRTOKEN_OPERATOR_MULT: int
                                    public static EXPRTOKEN_OPERATOR_SLASH: int
                                    public static EXPRTOKEN_OPERATOR_DOUBLE_SLASH: int
                                    public static EXPRTOKEN_OPERATOR_UNION: int
                                    public static EXPRTOKEN_OPERATOR_PLUS: int
                                    public static EXPRTOKEN_OPERATOR_MINUS: int
                                    public static EXPRTOKEN_OPERATOR_EQUAL: int
                                    public static EXPRTOKEN_OPERATOR_NOT_EQUAL: int
                                    public static EXPRTOKEN_OPERATOR_LESS: int
                                    public static EXPRTOKEN_OPERATOR_LESS_EQUAL: int
                                    public static EXPRTOKEN_OPERATOR_GREATER: int
                                    public static EXPRTOKEN_OPERATOR_GREATER_EQUAL: int
                                    public static EXPRTOKEN_FUNCTION_NAME: int
                                    public static EXPRTOKEN_AXISNAME_ANCESTOR: int
                                    public static EXPRTOKEN_AXISNAME_ANCESTOR_OR_SELF: int
                                    public static EXPRTOKEN_AXISNAME_ATTRIBUTE: int
                                    public static EXPRTOKEN_AXISNAME_CHILD: int
                                    public static EXPRTOKEN_AXISNAME_DESCENDANT: int
                                    public static EXPRTOKEN_AXISNAME_DESCENDANT_OR_SELF: int
                                    public static EXPRTOKEN_AXISNAME_FOLLOWING: int
                                    public static EXPRTOKEN_AXISNAME_FOLLOWING_SIBLING: int
                                    public static EXPRTOKEN_AXISNAME_NAMESPACE: int
                                    public static EXPRTOKEN_AXISNAME_PARENT: int
                                    public static EXPRTOKEN_AXISNAME_PRECEDING: int
                                    public static EXPRTOKEN_AXISNAME_PRECEDING_SIBLING: int
                                    public static EXPRTOKEN_AXISNAME_SELF: int
                                    public static EXPRTOKEN_LITERAL: int
                                    public static EXPRTOKEN_NUMBER: int
                                    public static EXPRTOKEN_VARIABLE_REFERENCE: int
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                    public getTokenString(arg0: int): string
                                    public addToken(arg0: java.lang.String | string): void
                                    public addToken(arg0: int): void
                                    public rewind(): void
                                    public hasMore(): boolean
                                    public nextToken(): int
                                    public peekToken(): int
                                    public nextTokenAsString(): string
                                    public dumpTokens(): void
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