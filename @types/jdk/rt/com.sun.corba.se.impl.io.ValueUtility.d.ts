declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
class ValueUtility {
    public static PRIVATE_MEMBER: short
    public static PUBLIC_MEMBER: short
    public constructor()
    public static getSignature(arg0: org.omg.CORBA.ValueMember): string
    public static translate(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.impl.io.ObjectStreamClass, arg2: javax.rmi.CORBA.ValueHandler): com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription
    public static isAssignableFrom(arg0: java.lang.String | string, arg1: com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription, arg2: com.sun.org.omg.SendingContext.CodeBase): boolean
    public static createTypeCodeForClass(arg0: org.omg.CORBA.ORB, arg1: java.lang.Class, arg2: javax.rmi.CORBA.ValueHandler): org.omg.CORBA.TypeCode
    public static getPrimitiveTypeCodeForClass(arg0: org.omg.CORBA.ORB, arg1: java.lang.Class, arg2: javax.rmi.CORBA.ValueHandler): org.omg.CORBA.TypeCode
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}