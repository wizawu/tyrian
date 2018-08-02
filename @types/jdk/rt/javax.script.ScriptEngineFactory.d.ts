declare namespace javax {
    namespace script {
        interface ScriptEngineFactory {
            getEngineName(): string
            getEngineVersion(): string
            getExtensions(): java.util.List<java.lang.String>
            getMimeTypes(): java.util.List<java.lang.String>
            getNames(): java.util.List<java.lang.String>
            getLanguageName(): string
            getLanguageVersion(): string
            getParameter(arg0: java.lang.String | string): java.lang.Object
            getMethodCallSyntax(arg0: java.lang.String | string, arg1: java.lang.String | string, ...arg2: java.lang.String[]): string
            getOutputStatement(arg0: java.lang.String | string): string
            getProgram(...arg0: java.lang.String[]): string
            getScriptEngine(): javax.script.ScriptEngine
        }
    }
}