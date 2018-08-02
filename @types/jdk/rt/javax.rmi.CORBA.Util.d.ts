declare namespace javax {
    namespace rmi {
        namespace CORBA {
            class Util {
                public static mapSystemException(arg0: org.omg.CORBA.SystemException): java.rmi.RemoteException
                public static writeAny(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                public static readAny(arg0: org.omg.CORBA.portable.InputStream): java.lang.Object
                public static writeRemoteObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                public static writeAbstractObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                public static registerTarget(arg0: javax.rmi.CORBA.Tie, arg1: java.rmi.Remote): void
                public static unexportObject(arg0: java.rmi.Remote): void
                public static getTie(arg0: java.rmi.Remote): javax.rmi.CORBA.Tie
                public static createValueHandler(): javax.rmi.CORBA.ValueHandler
                public static getCodebase(arg0: java.lang.Class): string
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class
                public static isLocal(arg0: javax.rmi.CORBA.Stub): boolean
                public static wrapException(arg0: java.lang.Throwable): java.rmi.RemoteException
                public static copyObjects(arg0: java.lang.Object[], arg1: org.omg.CORBA.ORB): java.lang.Object[]
                public static copyObject(arg0: java.lang.Object, arg1: org.omg.CORBA.ORB): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}