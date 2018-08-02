declare namespace sun {
    namespace security {
        namespace util {
            class DisabledAlgorithmConstraints$KeySizeConstraint extends sun.security.util.DisabledAlgorithmConstraints$Constraint {
                public constructor(arg0: java.lang.String | string, arg1: sun.security.util.DisabledAlgorithmConstraints$Constraint$Operator, arg2: int)
                public permits(arg0: sun.security.util.ConstraintsParameters): void
                public permits(arg0: java.security.Key): boolean
                public permits(arg0: java.security.AlgorithmParameters): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}