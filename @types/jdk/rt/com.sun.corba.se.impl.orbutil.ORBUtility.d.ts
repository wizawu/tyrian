declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        class ORBUtility {
                            public static insertSystemException(arg0: org.omg.CORBA.SystemException, arg1: org.omg.CORBA.Any): void
                            public static extractSystemException(arg0: org.omg.CORBA.Any): org.omg.CORBA.SystemException
                            public static createValueHandler(): javax.rmi.CORBA.ValueHandler
                            public static isForeignORB(arg0: com.sun.corba.se.spi.orb.ORB): boolean
                            public static bytesToInt(arg0: byte[], arg1: int): int
                            public static intToBytes(arg0: int, arg1: byte[], arg2: int): void
                            public static hexOf(arg0: char): int
                            public static writeSystemException(arg0: org.omg.CORBA.SystemException, arg1: org.omg.CORBA.portable.OutputStream): void
                            public static readSystemException(arg0: org.omg.CORBA.portable.InputStream): org.omg.CORBA.SystemException
                            public static classNameOf(arg0: java.lang.String | string): string
                            public static isSystemException(arg0: java.lang.String | string): boolean
                            public static getEncodingVersion(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IOR): byte
                            public static repositoryIdOf(arg0: java.lang.String | string): string
                            public static parseVersion(arg0: java.lang.String | string): int[]
                            public static compareVersion(arg0: int[], arg1: int[]): int
                            public static compareVersion(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                            public static getThreadName(arg0: java.lang.Thread | java.lang.Thread$$Lambda): string
                            public static dprint(arg0: java.lang.Object, arg1: java.lang.String | string): void
                            public static dprint(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public dprint(arg0: java.lang.String | string): void
                            public static dprintTrace(arg0: java.lang.Object, arg1: java.lang.String | string): void
                            public static dprint(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                            public static concatenateStringArrays(arg0: java.lang.String[], arg1: java.lang.String[]): java.lang.String[]
                            public static throwNotSerializableForCorba(arg0: java.lang.String | string): void
                            public static getMaxStreamFormatVersion(): byte
                            public static makeClientDelegate(arg0: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.spi.protocol.CorbaClientDelegate
                            public static makeObjectReference(arg0: com.sun.corba.se.spi.ior.IOR): org.omg.CORBA.Object
                            public static getIOR(arg0: org.omg.CORBA.Object): com.sun.corba.se.spi.ior.IOR
                            public static connectAndGetIOR(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Object): com.sun.corba.se.spi.ior.IOR
                            public static operationNameAndRequestId(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): string
                            public static isPrintable(arg0: char): boolean
                            public static getClassSecurityInfo(arg0: java.lang.Class): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}