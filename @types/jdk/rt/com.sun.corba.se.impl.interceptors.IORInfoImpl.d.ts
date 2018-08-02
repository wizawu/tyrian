declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
class IORInfoImpl extends org.omg.CORBA.LocalObject implements org.omg.PortableInterceptor.IORInfo , com.sun.corba.se.spi.legacy.interceptor.IORInfoExt {
    public get_effective_policy(arg0: int): org.omg.CORBA.Policy
    public add_ior_component(arg0: org.omg.IOP.TaggedComponent): void
    public add_ior_component_to_profile(arg0: org.omg.IOP.TaggedComponent, arg1: int): void
    public getServerPort(arg0: java.lang.String | string): int
    public getObjectAdapter(): com.sun.corba.se.spi.oa.ObjectAdapter
    public manager_id(): int
    public state(): short
    public adapter_template(): org.omg.PortableInterceptor.ObjectReferenceTemplate
    public current_factory(): org.omg.PortableInterceptor.ObjectReferenceFactory
    public current_factory(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}