declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
                        class ContextImpl extends org.omg.CORBA.Context {
                            public constructor(arg0: org.omg.CORBA.ORB)
                            public constructor(arg0: org.omg.CORBA.Context)
                            public context_name(): string
                            public parent(): org.omg.CORBA.Context
                            public create_child(arg0: java.lang.String | string): org.omg.CORBA.Context
                            public set_one_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any): void
                            public set_values(arg0: org.omg.CORBA.NVList): void
                            public delete_values(arg0: java.lang.String | string): void
                            public get_values(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): org.omg.CORBA.NVList
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}