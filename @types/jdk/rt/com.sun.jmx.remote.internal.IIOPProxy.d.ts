declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    interface IIOPProxy {
                        isStub(arg0: java.lang.Object): boolean
                        getDelegate(arg0: java.lang.Object): java.lang.Object
                        setDelegate(arg0: java.lang.Object, arg1: java.lang.Object): void
                        getOrb(arg0: java.lang.Object): java.lang.Object
                        connect(arg0: java.lang.Object, arg1: java.lang.Object): void
                        isOrb(arg0: java.lang.Object): boolean
                        createOrb(arg0: java.lang.String[], arg1: java.util.Properties): java.lang.Object
                        stringToObject(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
                        objectToString(arg0: java.lang.Object, arg1: java.lang.Object): string
                        narrow<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
                        exportObject<T>(arg0: java.rmi.Remote): void
                        unexportObject<T>(arg0: java.rmi.Remote): void
                        toStub<T>(arg0: java.rmi.Remote): java.rmi.Remote
                    }
                }
            }
        }
    }
}