declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
class NashornScriptEngineFactory implements javax.script.ScriptEngineFactory {
    public constructor()
    public getEngineName(): string
    public getEngineVersion(): string
    public getExtensions(): java.util.List<java.lang.String>
    public getLanguageName(): string
    public getLanguageVersion(): string
    public getMethodCallSyntax(arg0: java.lang.String | string, arg1: java.lang.String | string, ...arg2: java.lang.String[]): string
    public getMimeTypes(): java.util.List<java.lang.String>
    public getNames(): java.util.List<java.lang.String>
    public getOutputStatement(arg0: java.lang.String | string): string
    public getParameter(arg0: java.lang.String | string): java.lang.Object
    public getProgram(...arg0: java.lang.String[]): string
    public getScriptEngine(): javax.script.ScriptEngine
    public getScriptEngine(arg0: java.lang.ClassLoader): javax.script.ScriptEngine
    public getScriptEngine(arg0: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda): javax.script.ScriptEngine
    public getScriptEngine(...arg0: java.lang.String[]): javax.script.ScriptEngine
    public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader): javax.script.ScriptEngine
    public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader, arg2: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$Lambda): javax.script.ScriptEngine
    public static class: java.lang.Class<any>
}

            }
        }
    }
}