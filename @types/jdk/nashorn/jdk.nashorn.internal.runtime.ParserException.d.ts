declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ParserException extends jdk.nashorn.api.scripting.NashornException {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: jdk.nashorn.internal.runtime.JSErrorType, arg1: java.lang.String | string, arg2: jdk.nashorn.internal.runtime.Source, arg3: int, arg4: int, arg5: long)
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public getToken(): long
                    public getPosition(): int
                    public getErrorType(): jdk.nashorn.internal.runtime.JSErrorType
                    public throwAsEcmaException(): void
                    public throwAsEcmaException(arg0: jdk.nashorn.internal.objects.Global): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}