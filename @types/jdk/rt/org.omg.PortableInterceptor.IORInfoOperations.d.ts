declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface IORInfoOperations {
                get_effective_policy(arg0: int): org.omg.CORBA.Policy
                add_ior_component(arg0: org.omg.IOP.TaggedComponent): void
                add_ior_component_to_profile(arg0: org.omg.IOP.TaggedComponent, arg1: int): void
                manager_id(): int
                state(): short
                adapter_template(): org.omg.PortableInterceptor.ObjectReferenceTemplate
                current_factory(): org.omg.PortableInterceptor.ObjectReferenceFactory
                current_factory(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory | org.omg.PortableInterceptor.ObjectReferenceFactory$$Lambda): void
            }
        }
    }
}