declare namespace sun {
    namespace misc {
        class VMSupport {
            public constructor()
            public static getAgentProperties(): java.util.Properties
            public static serializePropertiesToByteArray(): byte[]
            public static serializeAgentPropertiesToByteArray(): byte[]
            public static isClassPathAttributePresent(arg0: java.lang.String | string): boolean
            public static getVMTemporaryDirectory(): string
            public static class: java.lang.Class<any>
        }
    }
}