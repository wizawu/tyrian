declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
                            class IDLNameTranslatorImpl implements com.sun.corba.se.spi.presentation.rmi.IDLNameTranslator {
                                public static get(arg0: java.lang.Class): com.sun.corba.se.spi.presentation.rmi.IDLNameTranslator
                                public static get(arg0: java.lang.Class[]): com.sun.corba.se.spi.presentation.rmi.IDLNameTranslator
                                public static getExceptionId(arg0: java.lang.Class): string
                                public getInterfaces(): java.lang.Class[]
                                public getMethods(): java.lang.reflect.Method[]
                                public getMethod(arg0: java.lang.String | string): java.lang.reflect.Method
                                public getIDLName(arg0: java.lang.reflect.Method): string
                                public static charToUnicodeRepresentation(arg0: char): string
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}