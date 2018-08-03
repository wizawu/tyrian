declare namespace org {
    namespace omg {
        namespace PortableServer {
            interface ServantActivatorOperations extends org.omg.PortableServer.ServantManagerOperations {
                incarnate(arg0: byte[], arg1: org.omg.PortableServer.POA): org.omg.PortableServer.Servant
                etherealize(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda, arg3: boolean, arg4: boolean): void
            }
        }
    }
}