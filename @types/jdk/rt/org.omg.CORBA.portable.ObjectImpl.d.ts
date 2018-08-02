declare namespace org {
    namespace omg {
        namespace CORBA {
            namespace portable {
                abstract class ObjectImpl implements org.omg.CORBA.Object {
                    public constructor()
                    public _get_delegate(): org.omg.CORBA.portable.Delegate
                    public _set_delegate(arg0: org.omg.CORBA.portable.Delegate): void
                    public _ids(): java.lang.String[]
                    public _duplicate(): org.omg.CORBA.Object
                    public _release(): void
                    public _is_a(arg0: java.lang.String | string): boolean
                    public _is_equivalent(arg0: org.omg.CORBA.Object): boolean
                    public _non_existent(): boolean
                    public _hash(arg0: int): int
                    public _request(arg0: java.lang.String | string): org.omg.CORBA.Request
                    public _create_request(arg0: org.omg.CORBA.Context, arg1: java.lang.String | string, arg2: org.omg.CORBA.NVList, arg3: org.omg.CORBA.NamedValue): org.omg.CORBA.Request
                    public _create_request(arg0: org.omg.CORBA.Context, arg1: java.lang.String | string, arg2: org.omg.CORBA.NVList, arg3: org.omg.CORBA.NamedValue, arg4: org.omg.CORBA.ExceptionList, arg5: org.omg.CORBA.ContextList): org.omg.CORBA.Request
                    public _get_interface_def(): org.omg.CORBA.Object
                    public _orb(): org.omg.CORBA.ORB
                    public _get_policy(arg0: int): org.omg.CORBA.Policy
                    public _get_domain_managers(): org.omg.CORBA.DomainManager[]
                    public _set_policy_override(arg0: org.omg.CORBA.Policy[], arg1: org.omg.CORBA.SetOverrideType): org.omg.CORBA.Object
                    public _is_local(): boolean
                    public _servant_preinvoke(arg0: java.lang.String | string, arg1: java.lang.Class): org.omg.CORBA.portable.ServantObject
                    public _servant_postinvoke(arg0: org.omg.CORBA.portable.ServantObject): void
                    public _request(arg0: java.lang.String | string, arg1: boolean): org.omg.CORBA.portable.OutputStream
                    public _invoke(arg0: org.omg.CORBA.portable.OutputStream): org.omg.CORBA.portable.InputStream
                    public _releaseReply(arg0: org.omg.CORBA.portable.InputStream): void
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}