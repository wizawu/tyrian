declare namespace javax {
    namespace management {
        class MatchQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: javax.management.AttributeValueExp, arg1: javax.management.StringValueExp)
            public getAttribute(): javax.management.AttributeValueExp
            public getPattern(): string
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}