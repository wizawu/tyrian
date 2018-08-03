declare namespace com {
    namespace ibm {
        namespace tools {
            namespace attach {
                namespace target {
                    class IPC {
                        public static JNI_OK: int
                        public constructor()
                        public static getUid(): long
                        public static processExists(arg0: long): boolean
                        public static getRandomNumber(): int
                        public static logMessage(arg0: java.lang.String | string): void
                        public static logMessage(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public static logMessage(arg0: java.lang.String | string, arg1: int): void
                        public static logMessage(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
                        public static logMessage(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        public static logMessage(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                        public static sendProperties(arg0: java.util.Properties, arg1: java.io.OutputStream): void
                        public static receiveProperties(arg0: java.io.InputStream, arg1: boolean): java.util.Properties
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}