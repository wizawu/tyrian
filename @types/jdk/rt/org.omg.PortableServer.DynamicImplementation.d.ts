declare namespace org {
    namespace omg {
        namespace PortableServer {
            abstract class DynamicImplementation extends org.omg.PortableServer.Servant {
                public constructor()
                public abstract invoke(arg0: org.omg.CORBA.ServerRequest | org.omg.CORBA.ServerRequest$$Lambda): void
                public static class: java.lang.Class<any>
            }
            interface DynamicImplementation$$Lambda extends org.omg.PortableServer.Servant {
                (arg0: org.omg.CORBA.ServerRequest | org.omg.CORBA.ServerRequest$$Lambda): void
            }
        }
    }
}