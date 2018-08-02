declare namespace javax {
    namespace management {
        class BinaryOpValueExp extends javax.management.QueryEval implements javax.management.ValueExp {
            public constructor()
            public constructor(arg0: int, arg1: javax.management.ValueExp, arg2: javax.management.ValueExp)
            public getOperator(): int
            public getLeftValue(): javax.management.ValueExp
            public getRightValue(): javax.management.ValueExp
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public toString(): string
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static class: java.lang.Class<any>
        }
    }
}