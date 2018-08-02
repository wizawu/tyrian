declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
class ObjectStreamClass implements java.io.Serializable {
    public static kDefaultUID: long
    public static CLASS_MASK: int
    public static FIELD_MASK: int
    public static METHOD_MASK: int
    public static NO_FIELDS: com.sun.corba.se.impl.io.ObjectStreamField[]
    public getName(): string
    public static getSerialVersionUID(arg0: java.lang.Class<any>): long
    public getSerialVersionUID(): long
    public getSerialVersionUIDStr(): string
    public static getActualSerialVersionUID(arg0: java.lang.Class<any>): long
    public getActualSerialVersionUID(): long
    public getActualSerialVersionUIDStr(): string
    public forClass(): java.lang.Class<any>
    public getFields(): com.sun.corba.se.impl.io.ObjectStreamField[]
    public hasField(arg0: org.omg.CORBA.ValueMember): boolean
    public getField(arg0: java.lang.String | string): com.sun.corba.se.impl.io.ObjectStreamField
    public writeReplace(arg0: java.io.Serializable): java.io.Serializable
    public readResolve(arg0: java.lang.Object): java.lang.Object
    public toString(): string
    public getRMIIIOPOptionalDataRepId(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}