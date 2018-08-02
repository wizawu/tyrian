declare namespace org {
    namespace omg {
        namespace PortableServer {
            class ServantRetentionPolicyValue implements org.omg.CORBA.portable.IDLEntity {
                public static _RETAIN: int
                public static RETAIN: org.omg.PortableServer.ServantRetentionPolicyValue
                public static _NON_RETAIN: int
                public static NON_RETAIN: org.omg.PortableServer.ServantRetentionPolicyValue
                public value(): int
                public static from_int(arg0: int): org.omg.PortableServer.ServantRetentionPolicyValue
                protected constructor(arg0: int)
                public static class: java.lang.Class<any>
            }
        }
    }
}