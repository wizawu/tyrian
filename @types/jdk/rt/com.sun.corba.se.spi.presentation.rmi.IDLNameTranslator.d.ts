declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
interface IDLNameTranslator {
    getInterfaces(): java.lang.Class[]
    getMethods(): java.lang.reflect.Method[]
    getMethod(arg0: java.lang.String | string): java.lang.reflect.Method
    getIDLName(arg0: java.lang.reflect.Method): string
}

                        }
                    }
                }
            }
        }
    }
}