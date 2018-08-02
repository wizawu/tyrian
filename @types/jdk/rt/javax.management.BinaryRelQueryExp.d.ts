declare namespace javax {
    namespace management {
        class BinaryRelQueryExp extends javax.management.QueryEval implements javax.management.QueryExp {
            public constructor()
            public constructor(arg0: int, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp)
            public getOperator(): int
            public getLeftValue(): javax.management.ValueExp
            public getRightValue(): javax.management.ValueExp
            public apply(arg0: javax.management.ObjectName): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}