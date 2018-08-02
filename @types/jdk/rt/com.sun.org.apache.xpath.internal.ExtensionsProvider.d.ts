declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        interface ExtensionsProvider {
                            functionAvailable(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                            elementAvailable(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                            extFunction(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Vector, arg3: java.lang.Object): java.lang.Object
                            extFunction(arg0: com.sun.org.apache.xpath.internal.functions.FuncExtFunction, arg1: java.util.Vector): java.lang.Object
                        }
                    }
                }
            }
        }
    }
}