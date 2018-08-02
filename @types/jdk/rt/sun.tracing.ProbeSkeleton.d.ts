declare namespace sun {
    namespace tracing {
        abstract class ProbeSkeleton implements com.sun.tracing.Probe {
            protected parameters: java.lang.Class<any>[]
            protected constructor(arg0: java.lang.Class<any>[])
            public isEnabled(): boolean
            public uncheckedTrigger(arg0: java.lang.Object[]): void
            public trigger(...arg0: java.lang.Object[]): void
            public static class: java.lang.Class<any>
        }
    }
}