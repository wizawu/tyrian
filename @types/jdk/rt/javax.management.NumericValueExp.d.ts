declare namespace javax {
    namespace management {
        class NumericValueExp extends javax.management.QueryEval implements javax.management.ValueExp {
            public constructor()
            public doubleValue(): double
            public longValue(): long
            public isLong(): boolean
            public toString(): string
            public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
            public setMBeanServer(arg0: javax.management.MBeanServer): void
            public static class: java.lang.Class<any>
        }
    }
}