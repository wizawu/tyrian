declare namespace org {
    namespace omg {
        namespace PortableServer {
            namespace portable {
                interface Delegate {
                    orb(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.ORB
                    this_object(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
                    poa(arg0: org.omg.PortableServer.Servant): org.omg.PortableServer.POA
                    object_id(arg0: org.omg.PortableServer.Servant): byte[]
                    default_POA(arg0: org.omg.PortableServer.Servant): org.omg.PortableServer.POA
                    is_a(arg0: org.omg.PortableServer.Servant, arg1: java.lang.String | string): boolean
                    non_existent(arg0: org.omg.PortableServer.Servant): boolean
                    get_interface_def(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
                }
            }
        }
    }
}