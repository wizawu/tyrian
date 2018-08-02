declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace options {
                    class OptionTemplate implements java.lang.Comparable<jdk.nashorn.internal.runtime.options.OptionTemplate> {
                        public isHelp(): boolean
                        public isXHelp(): boolean
                        public getResource(): string
                        public getType(): string
                        public getKey(): string
                        public getDefaultValue(): string
                        public getDependency(): string
                        public getConflict(): string
                        public isUndocumented(): boolean
                        public getShortName(): string
                        public getName(): string
                        public getDescription(): string
                        public isValueNextArg(): boolean
                        public toString(): string
                        public compareTo(arg0: jdk.nashorn.internal.runtime.options.OptionTemplate): int
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}