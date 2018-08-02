declare namespace sun {
    namespace management {
        class Agent {
            public constructor()
            public static premain(arg0: java.lang.String | string): void
            public static agentmain(arg0: java.lang.String | string): void
            public static loadManagementProperties(): java.util.Properties
            public static getManagementProperties(): java.util.Properties
            public static startAgent(): void
            public static error(arg0: java.lang.String | string): void
            public static error(arg0: java.lang.String | string, arg1: java.lang.String[]): void
            public static error(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public static error(arg0: java.lang.Exception): void
            public static warning(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public static getText(arg0: java.lang.String | string): string
            public static getText(arg0: java.lang.String | string, ...arg1: java.lang.String[]): string
            public static class: java.lang.Class<any>
        }
    }
}