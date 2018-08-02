declare namespace org {
    namespace omg {
        namespace PortableServer {
            interface POAOperations {
                create_POA(arg0: java.lang.String | string, arg1: org.omg.PortableServer.POAManager, arg2: org.omg.CORBA.Policy[]): org.omg.PortableServer.POA
                find_POA(arg0: java.lang.String | string, arg1: boolean): org.omg.PortableServer.POA
                destroy(arg0: boolean, arg1: boolean): void
                create_thread_policy(arg0: org.omg.PortableServer.ThreadPolicyValue): org.omg.PortableServer.ThreadPolicy
                create_lifespan_policy(arg0: org.omg.PortableServer.LifespanPolicyValue): org.omg.PortableServer.LifespanPolicy
                create_id_uniqueness_policy(arg0: org.omg.PortableServer.IdUniquenessPolicyValue): org.omg.PortableServer.IdUniquenessPolicy
                create_id_assignment_policy(arg0: org.omg.PortableServer.IdAssignmentPolicyValue): org.omg.PortableServer.IdAssignmentPolicy
                create_implicit_activation_policy(arg0: org.omg.PortableServer.ImplicitActivationPolicyValue): org.omg.PortableServer.ImplicitActivationPolicy
                create_servant_retention_policy(arg0: org.omg.PortableServer.ServantRetentionPolicyValue): org.omg.PortableServer.ServantRetentionPolicy
                create_request_processing_policy(arg0: org.omg.PortableServer.RequestProcessingPolicyValue): org.omg.PortableServer.RequestProcessingPolicy
                the_name(): string
                the_parent(): org.omg.PortableServer.POA
                the_children(): org.omg.PortableServer.POA[]
                the_POAManager(): org.omg.PortableServer.POAManager
                the_activator(): org.omg.PortableServer.AdapterActivator
                the_activator(arg0: org.omg.PortableServer.AdapterActivator): void
                get_servant_manager(): org.omg.PortableServer.ServantManager
                set_servant_manager(arg0: org.omg.PortableServer.ServantManager): void
                get_servant(): org.omg.PortableServer.Servant
                set_servant(arg0: org.omg.PortableServer.Servant): void
                activate_object(arg0: org.omg.PortableServer.Servant): byte[]
                activate_object_with_id(arg0: byte[], arg1: org.omg.PortableServer.Servant): void
                deactivate_object(arg0: byte[]): void
                create_reference(arg0: java.lang.String | string): org.omg.CORBA.Object
                create_reference_with_id(arg0: byte[], arg1: java.lang.String | string): org.omg.CORBA.Object
                servant_to_id(arg0: org.omg.PortableServer.Servant): byte[]
                servant_to_reference(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
                reference_to_servant(arg0: org.omg.CORBA.Object): org.omg.PortableServer.Servant
                reference_to_id(arg0: org.omg.CORBA.Object): byte[]
                id_to_servant(arg0: byte[]): org.omg.PortableServer.Servant
                id_to_reference(arg0: byte[]): org.omg.CORBA.Object
                id(): byte[]
            }
        }
    }
}