declare namespace org {
    namespace omg {
        namespace CORBA {
interface Object {
    _is_a(arg0: java.lang.String | string): boolean
    _is_equivalent(arg0: org.omg.CORBA.Object): boolean
    _non_existent(): boolean
    _hash(arg0: int): int
    _duplicate(): org.omg.CORBA.Object
    _release(): void
    _get_interface_def(): org.omg.CORBA.Object
    _request(arg0: java.lang.String | string): org.omg.CORBA.Request
    _create_request(arg0: org.omg.CORBA.Context, arg1: java.lang.String | string, arg2: org.omg.CORBA.NVList, arg3: org.omg.CORBA.NamedValue): org.omg.CORBA.Request
    _create_request(arg0: org.omg.CORBA.Context, arg1: java.lang.String | string, arg2: org.omg.CORBA.NVList, arg3: org.omg.CORBA.NamedValue, arg4: org.omg.CORBA.ExceptionList, arg5: org.omg.CORBA.ContextList): org.omg.CORBA.Request
    _get_policy(arg0: int): org.omg.CORBA.Policy
    _get_domain_managers(): org.omg.CORBA.DomainManager[]
    _set_policy_override(arg0: org.omg.CORBA.Policy[], arg1: org.omg.CORBA.SetOverrideType): org.omg.CORBA.Object
}

        }
    }
}