declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace logging {
                    class DebugLogger {
                        public static readonly DISABLED_LOGGER: jdk.nashorn.internal.runtime.logging.DebugLogger
                        public constructor(arg0: java.lang.String | string, arg1: java.util.logging.Level, arg2: boolean)
                        public getLevel(): java.util.logging.Level
                        public getOutputStream(): java.io.PrintWriter
                        public static quote(arg0: java.lang.String | string): string
                        public isEnabled(): boolean
                        public static isEnabled(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger): boolean
                        public indent(arg0: int): void
                        public indent(): void
                        public unindent(): void
                        public isLoggable(arg0: java.util.logging.Level): boolean
                        public finest(arg0: java.lang.String | string): void
                        public finest(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public finest(...arg0: java.lang.Object[]): void
                        public finest(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public finer(arg0: java.lang.String | string): void
                        public finer(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public finer(...arg0: java.lang.Object[]): void
                        public finer(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public fine(arg0: java.lang.String | string): void
                        public fine(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public fine(...arg0: java.lang.Object[]): void
                        public fine(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public config(arg0: java.lang.String | string): void
                        public config(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public config(...arg0: java.lang.Object[]): void
                        public config(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public info(arg0: java.lang.String | string): void
                        public info(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public info(...arg0: java.lang.Object[]): void
                        public info(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public warning(arg0: java.lang.String | string): void
                        public warning(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public warning(...arg0: java.lang.Object[]): void
                        public warning(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public severe(arg0: java.lang.String | string): void
                        public severe(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, arg1: java.lang.String | string): void
                        public severe(...arg0: java.lang.Object[]): void
                        public severe(arg0: jdk.nashorn.internal.runtime.events.RuntimeEvent<any>, ...arg1: java.lang.Object[]): void
                        public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                        public log(arg0: java.util.logging.Level, ...arg1: java.lang.Object[]): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}