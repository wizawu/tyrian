declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
abstract class Delegate {
    public constructor()
    public get_interface_def(arg0: org.omg.CORBA.Object): org.omg.CORBA.Object
    public duplicate(arg0: org.omg.CORBA.Object): org.omg.CORBA.Object
    public release(arg0: org.omg.CORBA.Object): void
    public is_a(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string): boolean
    public non_existent(arg0: org.omg.CORBA.Object): boolean
    public is_equivalent(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.Object): boolean
    public hash(arg0: org.omg.CORBA.Object, arg1: int): int
    public request(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string): org.omg.CORBA.Request
    public create_request(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.Context, arg2: java.lang.String | string, arg3: org.omg.CORBA.NVList, arg4: org.omg.CORBA.NamedValue): org.omg.CORBA.Request
    public create_request(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.Context, arg2: java.lang.String | string, arg3: org.omg.CORBA.NVList, arg4: org.omg.CORBA.NamedValue, arg5: org.omg.CORBA.ExceptionList, arg6: org.omg.CORBA.ContextList): org.omg.CORBA.Request
    public orb(arg0: org.omg.CORBA.Object): org.omg.CORBA.ORB
    public get_policy(arg0: org.omg.CORBA.Object, arg1: int): org.omg.CORBA.Policy
    public get_domain_managers(arg0: org.omg.CORBA.Object): org.omg.CORBA.DomainManager[]
    public set_policy_override(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.Policy[], arg2: org.omg.CORBA.SetOverrideType): org.omg.CORBA.Object
    public is_local(arg0: org.omg.CORBA.Object): boolean
    public servant_preinvoke(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string, arg2: java.lang.Class): org.omg.CORBA.portable.ServantObject
    public servant_postinvoke(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.portable.ServantObject): void
    public request(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string, arg2: boolean): org.omg.CORBA.portable.OutputStream
    public invoke(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.portable.OutputStream): org.omg.CORBA.portable.InputStream
    public releaseReply(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.portable.InputStream): void
    public toString(arg0: org.omg.CORBA.Object): string
    public hashCode(arg0: org.omg.CORBA.Object): int
    public equals(arg0: org.omg.CORBA.Object, arg1: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}