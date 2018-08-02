declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace resolver {
class ResolverDefault {
    public constructor()
    public static makeLocalResolver(): com.sun.corba.se.spi.resolver.LocalResolver
    public static makeORBInitRefResolver(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda, arg1: com.sun.corba.se.spi.orb.StringPair[]): com.sun.corba.se.spi.resolver.Resolver
    public static makeORBDefaultInitRefResolver(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda, arg1: java.lang.String | string): com.sun.corba.se.spi.resolver.Resolver
    public static makeBootstrapResolver(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: int): com.sun.corba.se.spi.resolver.Resolver
    public static makeCompositeResolver(arg0: com.sun.corba.se.spi.resolver.Resolver, arg1: com.sun.corba.se.spi.resolver.Resolver): com.sun.corba.se.spi.resolver.Resolver
    public static makeINSURLOperation(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.resolver.Resolver): com.sun.corba.se.spi.orb.Operation
    public static makeSplitLocalResolver(arg0: com.sun.corba.se.spi.resolver.Resolver, arg1: com.sun.corba.se.spi.resolver.LocalResolver): com.sun.corba.se.spi.resolver.LocalResolver
    public static makeFileResolver(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.io.File): com.sun.corba.se.spi.resolver.Resolver
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}