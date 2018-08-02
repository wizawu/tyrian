declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class ORB {
                public constructor()
                public static init(): org.omg.CORBA.ORB
                public static init(arg0: java.lang.String[], arg1: java.util.Properties): org.omg.CORBA.ORB
                public static init(arg0: java.applet.Applet, arg1: java.util.Properties): org.omg.CORBA.ORB
                protected set_parameters(arg0: java.lang.String[], arg1: java.util.Properties): void
                protected set_parameters(arg0: java.applet.Applet, arg1: java.util.Properties): void
                public connect(arg0: org.omg.CORBA.Object): void
                public destroy(): void
                public disconnect(arg0: org.omg.CORBA.Object): void
                public list_initial_services(): java.lang.String[]
                public resolve_initial_references(arg0: java.lang.String | string): org.omg.CORBA.Object
                public object_to_string(arg0: org.omg.CORBA.Object): string
                public string_to_object(arg0: java.lang.String | string): org.omg.CORBA.Object
                public create_list(arg0: int): org.omg.CORBA.NVList
                public create_operation_list(arg0: org.omg.CORBA.Object): org.omg.CORBA.NVList
                public create_named_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any, arg2: int): org.omg.CORBA.NamedValue
                public create_exception_list(): org.omg.CORBA.ExceptionList
                public create_context_list(): org.omg.CORBA.ContextList
                public get_default_context(): org.omg.CORBA.Context
                public create_environment(): org.omg.CORBA.Environment
                public create_output_stream(): org.omg.CORBA.portable.OutputStream
                public send_multiple_requests_oneway(arg0: org.omg.CORBA.Request[]): void
                public send_multiple_requests_deferred(arg0: org.omg.CORBA.Request[]): void
                public poll_next_response(): boolean
                public get_next_response(): org.omg.CORBA.Request
                public get_primitive_tc(arg0: org.omg.CORBA.TCKind): org.omg.CORBA.TypeCode
                public create_struct_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.StructMember[]): org.omg.CORBA.TypeCode
                public create_union_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode, arg3: org.omg.CORBA.UnionMember[]): org.omg.CORBA.TypeCode
                public create_enum_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[]): org.omg.CORBA.TypeCode
                public create_alias_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                public create_exception_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.StructMember[]): org.omg.CORBA.TypeCode
                public create_interface_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                public create_string_tc(arg0: int): org.omg.CORBA.TypeCode
                public create_wstring_tc(arg0: int): org.omg.CORBA.TypeCode
                public create_sequence_tc(arg0: int, arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                public create_recursive_sequence_tc(arg0: int, arg1: int): org.omg.CORBA.TypeCode
                public create_array_tc(arg0: int, arg1: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                public create_native_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                public create_abstract_interface_tc(arg0: java.lang.String | string, arg1: java.lang.String | string): org.omg.CORBA.TypeCode
                public create_fixed_tc(arg0: short, arg1: short): org.omg.CORBA.TypeCode
                public create_value_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: org.omg.CORBA.TypeCode, arg4: org.omg.CORBA.ValueMember[]): org.omg.CORBA.TypeCode
                public create_recursive_tc(arg0: java.lang.String | string): org.omg.CORBA.TypeCode
                public create_value_box_tc(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.omg.CORBA.TypeCode): org.omg.CORBA.TypeCode
                public create_any(): org.omg.CORBA.Any
                public get_current(): org.omg.CORBA.Current
                public run(): void
                public shutdown(arg0: boolean): void
                public work_pending(): boolean
                public perform_work(): void
                public get_service_information(arg0: short, arg1: org.omg.CORBA.ServiceInformationHolder): boolean
                public create_dyn_any(arg0: org.omg.CORBA.Any): org.omg.CORBA.DynAny
                public create_basic_dyn_any(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynAny
                public create_dyn_struct(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynStruct
                public create_dyn_sequence(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynSequence
                public create_dyn_array(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynArray
                public create_dyn_union(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynUnion
                public create_dyn_enum(arg0: org.omg.CORBA.TypeCode): org.omg.CORBA.DynEnum
                public create_policy(arg0: int, arg1: org.omg.CORBA.Any): org.omg.CORBA.Policy
                public static class: java.lang.Class<any>
            }
        }
    }
}