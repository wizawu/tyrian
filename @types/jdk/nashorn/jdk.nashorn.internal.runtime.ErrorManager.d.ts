declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ErrorManager {
                    public constructor()
                    public constructor(arg0: java.io.PrintWriter)
                    public static format(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Source, arg2: int, arg3: int, arg4: long): string
                    public error(arg0: jdk.nashorn.internal.runtime.ParserException): void
                    public error(arg0: java.lang.String | string): void
                    public warning(arg0: jdk.nashorn.internal.runtime.ParserException): void
                    public warning(arg0: java.lang.String | string): void
                    public hasErrors(): boolean
                    public getLimit(): int
                    public setLimit(arg0: int): void
                    public isWarningsAsErrors(): boolean
                    public setWarningsAsErrors(arg0: boolean): void
                    public getNumberOfErrors(): int
                    public getNumberOfWarnings(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}