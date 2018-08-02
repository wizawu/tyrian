declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
class DelegateImpl implements org.omg.PortableServer.portable.Delegate {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.impl.oa.poa.POAFactory)
    public orb(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.ORB
    public this_object(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
    public poa(arg0: org.omg.PortableServer.Servant): org.omg.PortableServer.POA
    public object_id(arg0: org.omg.PortableServer.Servant): byte[]
    public default_POA(arg0: org.omg.PortableServer.Servant): org.omg.PortableServer.POA
    public is_a(arg0: org.omg.PortableServer.Servant, arg1: java.lang.String | string): boolean
    public non_existent(arg0: org.omg.PortableServer.Servant): boolean
    public get_interface_def(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}