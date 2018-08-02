declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace protocol {
                    namespace iiop {
                        class IIOPProxyImpl implements com.sun.jmx.remote.internal.IIOPProxy {
                            public constructor()
                            public isStub(arg0: java.lang.Object): boolean
                            public getDelegate(arg0: java.lang.Object): java.lang.Object
                            public setDelegate(arg0: java.lang.Object, arg1: java.lang.Object): void
                            public getOrb(arg0: java.lang.Object): java.lang.Object
                            public connect(arg0: java.lang.Object, arg1: java.lang.Object): void
                            public isOrb(arg0: java.lang.Object): boolean
                            public createOrb(arg0: java.lang.String[], arg1: java.util.Properties): java.lang.Object
                            public stringToObject(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
                            public objectToString(arg0: java.lang.Object, arg1: java.lang.Object): string
                            public narrow<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
                            public exportObject<T>(arg0: java.rmi.Remote): void
                            public unexportObject<T>(arg0: java.rmi.Remote): void
                            public toStub<T>(arg0: java.rmi.Remote): java.rmi.Remote
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}