declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace options {
                    class Options {
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: java.io.PrintWriter)
                        public getResource(): string
                        public toString(): string
                        public static getBooleanProperty(arg0: java.lang.String | string, arg1: java.lang.Boolean | boolean): boolean
                        public static getBooleanProperty(arg0: java.lang.String | string): boolean
                        public static getStringProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public static getIntProperty(arg0: java.lang.String | string, arg1: int): int
                        public get(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.options.Option<any>
                        public getBoolean(arg0: java.lang.String | string): boolean
                        public getInteger(arg0: java.lang.String | string): int
                        public getString(arg0: java.lang.String | string): string
                        public set(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.options.Option<any>): void
                        public set(arg0: java.lang.String | string, arg1: boolean): void
                        public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public getArguments(): java.util.List<java.lang.String>
                        public getFiles(): java.util.List<java.lang.String>
                        public static getValidOptions(): java.util.Collection<jdk.nashorn.internal.runtime.options.OptionTemplate>
                        public displayHelp(arg0: java.lang.IllegalArgumentException): void
                        public displayHelp(arg0: boolean): void
                        public process(arg0: java.lang.String[]): void
                        public getOptionTemplateByKey(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.options.OptionTemplate
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}