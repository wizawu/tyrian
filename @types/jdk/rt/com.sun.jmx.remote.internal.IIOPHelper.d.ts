declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    class IIOPHelper {
                        public static isAvailable(): boolean
                        public static isStub(arg0: java.lang.Object): boolean
                        public static getDelegate(arg0: java.lang.Object): java.lang.Object
                        public static setDelegate(arg0: java.lang.Object, arg1: java.lang.Object): void
                        public static getOrb(arg0: java.lang.Object): java.lang.Object
                        public static connect(arg0: java.lang.Object, arg1: java.lang.Object): void
                        public static isOrb(arg0: java.lang.Object): boolean
                        public static createOrb(arg0: java.lang.String[], arg1: java.util.Properties): java.lang.Object
                        public static stringToObject(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
                        public static objectToString(arg0: java.lang.Object, arg1: java.lang.Object): string
                        public static narrow<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
                        public static exportObject<T>(arg0: java.rmi.Remote): void
                        public static unexportObject<T>(arg0: java.rmi.Remote): void
                        public static toStub<T>(arg0: java.rmi.Remote): java.rmi.Remote
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}