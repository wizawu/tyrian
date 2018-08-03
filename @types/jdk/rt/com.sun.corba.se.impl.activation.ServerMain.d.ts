declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace activation {
                        class ServerMain {
                            public static readonly OK: int
                            public static readonly MAIN_CLASS_NOT_FOUND: int
                            public static readonly NO_MAIN_METHOD: int
                            public static readonly APPLICATION_ERROR: int
                            public static readonly UNKNOWN_ERROR: int
                            public static readonly NO_SERVER_ID: int
                            public static readonly REGISTRATION_FAILED: int
                            public constructor()
                            public static printResult(arg0: int): string
                            public static logInformation(arg0: java.lang.String | string): void
                            public static logError(arg0: java.lang.String | string): void
                            public static logTerminal(arg0: java.lang.String | string, arg1: int): void
                            public static main(arg0: java.lang.String[]): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}