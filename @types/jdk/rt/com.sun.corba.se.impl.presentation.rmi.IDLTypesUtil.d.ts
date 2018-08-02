declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            class IDLTypesUtil {
                                public static VALID_TYPE: int
                                public static INVALID_TYPE: int
                                public static FOLLOW_RMIC: boolean
                                public constructor()
                                public validateRemoteInterface(arg0: java.lang.Class): void
                                public isRemoteInterface(arg0: java.lang.Class): boolean
                                public isPrimitive(arg0: java.lang.Class): boolean
                                public isValue(arg0: java.lang.Class): boolean
                                public isArray(arg0: java.lang.Class): boolean
                                public isException(arg0: java.lang.Class): boolean
                                public isRemoteException(arg0: java.lang.Class): boolean
                                public isCheckedException(arg0: java.lang.Class): boolean
                                public isObjectReference(arg0: java.lang.Class): boolean
                                public isEntity(arg0: java.lang.Class): boolean
                                public isPropertyAccessorMethod(arg0: java.lang.reflect.Method, arg1: java.lang.Class): boolean
                                public getAttributeNameForProperty(arg0: java.lang.String | string): string
                                public getPrimitiveIDLTypeMapping(arg0: java.lang.Class): com.sun.corba.se.impl.presentation.rmi.IDLType
                                public getSpecialCaseIDLTypeMapping(arg0: java.lang.Class): com.sun.corba.se.impl.presentation.rmi.IDLType
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}