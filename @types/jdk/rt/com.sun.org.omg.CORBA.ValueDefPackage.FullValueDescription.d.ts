declare namespace com {
    namespace sun {
        namespace org {
            namespace omg {
                namespace CORBA {
                    namespace ValueDefPackage {
                        class FullValueDescription implements org.omg.CORBA.portable.IDLEntity {
                            public name: string
                            public id: string
                            public is_abstract: boolean
                            public is_custom: boolean
                            public defined_in: string
                            public version: string
                            public operations: com.sun.org.omg.CORBA.OperationDescription[]
                            public attributes: com.sun.org.omg.CORBA.AttributeDescription[]
                            public members: org.omg.CORBA.ValueMember[]
                            public initializers: com.sun.org.omg.CORBA.Initializer[]
                            public supported_interfaces: java.lang.String[]
                            public abstract_base_values: java.lang.String[]
                            public is_truncatable: boolean
                            public base_value: string
                            public type: org.omg.CORBA.TypeCode
                            public constructor()
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: com.sun.org.omg.CORBA.OperationDescription[], arg7: com.sun.org.omg.CORBA.AttributeDescription[], arg8: org.omg.CORBA.ValueMember[], arg9: com.sun.org.omg.CORBA.Initializer[], arg10: java.lang.String[], arg11: java.lang.String[], arg12: boolean, arg13: java.lang.String | string, arg14: org.omg.CORBA.TypeCode)
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}