declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
class POAImpl extends com.sun.corba.se.spi.oa.ObjectAdapterBase implements org.omg.PortableServer.POA {
    protected isDestroying: java.lang.ThreadLocal
    public toString(): string
    public create_POA(arg0: java.lang.String | string, arg1: org.omg.PortableServer.POAManager, arg2: org.omg.CORBA.Policy[]): org.omg.PortableServer.POA
    public find_POA(arg0: java.lang.String | string, arg1: boolean): org.omg.PortableServer.POA
    public destroy(arg0: boolean, arg1: boolean): void
    public create_thread_policy(arg0: org.omg.PortableServer.ThreadPolicyValue): org.omg.PortableServer.ThreadPolicy
    public create_lifespan_policy(arg0: org.omg.PortableServer.LifespanPolicyValue): org.omg.PortableServer.LifespanPolicy
    public create_id_uniqueness_policy(arg0: org.omg.PortableServer.IdUniquenessPolicyValue): org.omg.PortableServer.IdUniquenessPolicy
    public create_id_assignment_policy(arg0: org.omg.PortableServer.IdAssignmentPolicyValue): org.omg.PortableServer.IdAssignmentPolicy
    public create_implicit_activation_policy(arg0: org.omg.PortableServer.ImplicitActivationPolicyValue): org.omg.PortableServer.ImplicitActivationPolicy
    public create_servant_retention_policy(arg0: org.omg.PortableServer.ServantRetentionPolicyValue): org.omg.PortableServer.ServantRetentionPolicy
    public create_request_processing_policy(arg0: org.omg.PortableServer.RequestProcessingPolicyValue): org.omg.PortableServer.RequestProcessingPolicy
    public the_name(): string
    public the_parent(): org.omg.PortableServer.POA
    public the_children(): org.omg.PortableServer.POA[]
    public the_POAManager(): org.omg.PortableServer.POAManager
    public the_activator(): org.omg.PortableServer.AdapterActivator
    public the_activator(arg0: org.omg.PortableServer.AdapterActivator): void
    public get_servant_manager(): org.omg.PortableServer.ServantManager
    public set_servant_manager(arg0: org.omg.PortableServer.ServantManager): void
    public get_servant(): org.omg.PortableServer.Servant
    public set_servant(arg0: org.omg.PortableServer.Servant): void
    public activate_object(arg0: org.omg.PortableServer.Servant): byte[]
    public activate_object_with_id(arg0: byte[], arg1: org.omg.PortableServer.Servant): void
    public deactivate_object(arg0: byte[]): void
    public create_reference(arg0: java.lang.String | string): org.omg.CORBA.Object
    public create_reference_with_id(arg0: byte[], arg1: java.lang.String | string): org.omg.CORBA.Object
    public servant_to_id(arg0: org.omg.PortableServer.Servant): byte[]
    public servant_to_reference(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
    public reference_to_servant(arg0: org.omg.CORBA.Object): org.omg.PortableServer.Servant
    public reference_to_id(arg0: org.omg.CORBA.Object): byte[]
    public id_to_servant(arg0: byte[]): org.omg.PortableServer.Servant
    public id_to_reference(arg0: byte[]): org.omg.CORBA.Object
    public id(): byte[]
    public getEffectivePolicy(arg0: int): org.omg.CORBA.Policy
    public getManagerId(): int
    public getState(): short
    public getInterfaces(arg0: java.lang.Object, arg1: byte[]): java.lang.String[]
    protected getObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
    public enter(): void
    public exit(): void
    public getInvocationServant(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
    public getLocalServant(arg0: byte[]): org.omg.CORBA.Object
    public returnServant(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}