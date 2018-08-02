declare namespace org {
    namespace omg {
        namespace PortableServer {
            interface CurrentOperations extends org.omg.CORBA.CurrentOperations {
                get_POA(): org.omg.PortableServer.POA
                get_object_id(): byte[]
            }
        }
    }
}