declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
                        abstract class DatabindingFactory {
                            public constructor()
                            public abstract createBuilder(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): com.oracle.webservices.internal.api.databinding.Databinding$Builder
                            public abstract properties(): java.util.Map<java.lang.String, java.lang.Object>
                            public static newInstance(): com.oracle.webservices.internal.api.databinding.DatabindingFactory
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}