declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace mimepull {
                            abstract class CleanUpExecutorFactory {
                                protected constructor()
                                public static newInstance(): com.sun.xml.internal.org.jvnet.mimepull.CleanUpExecutorFactory
                                public abstract getExecutor(): java.util.concurrent.Executor
                                public static class: java.lang.Class<any>
                            }
                            interface CleanUpExecutorFactory$$Lambda {
                                (): java.util.concurrent.Executor
                            }
                        }
                    }
                }
            }
        }
    }
}