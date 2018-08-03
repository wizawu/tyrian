declare namespace org {
    namespace omg {
        namespace PortableServer {
            namespace portable {
                interface Delegate {
                    orb(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): org.omg.CORBA.ORB
                    this_object(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): org.omg.CORBA.Object
                    poa(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): org.omg.PortableServer.POA
                    object_id(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): byte[]
                    default_POA(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): org.omg.PortableServer.POA
                    is_a(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda, arg1: java.lang.String | string): boolean
                    non_existent(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): boolean
                    get_interface_def(arg0: org.omg.PortableServer.Servant | org.omg.PortableServer.Servant$$Lambda): org.omg.CORBA.Object
                }
            }
        }
    }
}