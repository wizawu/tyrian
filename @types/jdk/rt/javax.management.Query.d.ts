declare namespace javax {
    namespace management {
        class Query {
            public static readonly GT: int
            public static readonly LT: int
            public static readonly GE: int
            public static readonly LE: int
            public static readonly EQ: int
            public static readonly PLUS: int
            public static readonly MINUS: int
            public static readonly TIMES: int
            public static readonly DIV: int
            public constructor()
            public static and(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp): javax.management.QueryExp
            public static or(arg0: javax.management.QueryExp, arg1: javax.management.QueryExp): javax.management.QueryExp
            public static gt(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static geq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static leq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static lt(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static eq(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.QueryExp
            public static between(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp): javax.management.QueryExp
            public static match(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static attr(arg0: java.lang.String | string): javax.management.AttributeValueExp
            public static attr(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.AttributeValueExp
            public static classattr(): javax.management.AttributeValueExp
            public static not(arg0: javax.management.QueryExp): javax.management.QueryExp
            public static in(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp[]): javax.management.QueryExp
            public static value(arg0: java.lang.String | string): javax.management.StringValueExp
            public static value(arg0: java.lang.Number): javax.management.ValueExp
            public static value(arg0: int): javax.management.ValueExp
            public static value(arg0: long): javax.management.ValueExp
            public static value(arg0: float): javax.management.ValueExp
            public static value(arg0: double): javax.management.ValueExp
            public static value(arg0: boolean): javax.management.ValueExp
            public static plus(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static times(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static minus(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static div(arg0: javax.management.ValueExp, arg1: javax.management.ValueExp): javax.management.ValueExp
            public static initialSubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static anySubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static finalSubString(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp): javax.management.QueryExp
            public static isInstanceOf(arg0: javax.management.StringValueExp): javax.management.QueryExp
            public static class: java.lang.Class<any>
        }
    }
}