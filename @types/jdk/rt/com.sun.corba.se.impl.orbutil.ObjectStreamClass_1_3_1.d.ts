declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        class ObjectStreamClass_1_3_1 implements java.io.Serializable {
                            public static readonly kDefaultUID: long
                            public static readonly NO_FIELDS: com.sun.corba.se.impl.orbutil.ObjectStreamField[]
                            public getName(): string
                            public static getSerialVersionUID(arg0: java.lang.Class<any>): long
                            public getSerialVersionUID(): long
                            public getSerialVersionUIDStr(): string
                            public static getActualSerialVersionUID(arg0: java.lang.Class<any>): long
                            public getActualSerialVersionUID(): long
                            public getActualSerialVersionUIDStr(): string
                            public forClass(): java.lang.Class<any>
                            public getFields(): com.sun.corba.se.impl.orbutil.ObjectStreamField[]
                            public hasField(arg0: org.omg.CORBA.ValueMember): boolean
                            public getField(arg0: java.lang.String | string): com.sun.corba.se.impl.orbutil.ObjectStreamField
                            public writeReplace(arg0: java.io.Serializable): java.io.Serializable
                            public readResolve(arg0: java.lang.Object): java.lang.Object
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}