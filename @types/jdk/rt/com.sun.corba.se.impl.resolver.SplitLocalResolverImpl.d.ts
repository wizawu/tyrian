declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace resolver {
                        class SplitLocalResolverImpl implements com.sun.corba.se.spi.resolver.LocalResolver {
                            public constructor(arg0: com.sun.corba.se.spi.resolver.Resolver, arg1: com.sun.corba.se.spi.resolver.LocalResolver | com.sun.corba.se.spi.resolver.LocalResolver$$Lambda)
                            public register(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orbutil.closure.Closure | com.sun.corba.se.spi.orbutil.closure.Closure$$Lambda): void
                            public resolve(arg0: java.lang.String | string): org.omg.CORBA.Object
                            public list(): java.util.Set
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}