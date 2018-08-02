declare namespace javax {
    namespace script {
class SimpleScriptContext implements javax.script.ScriptContext {
    protected writer: java.io.Writer
    protected errorWriter: java.io.Writer
    protected reader: java.io.Reader
    protected engineScope: javax.script.Bindings
    protected globalScope: javax.script.Bindings
    public constructor()
    public setBindings(arg0: javax.script.Bindings, arg1: int): void
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public getAttribute(arg0: java.lang.String | string, arg1: int): java.lang.Object
    public removeAttribute(arg0: java.lang.String | string, arg1: int): java.lang.Object
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
    public getWriter(): java.io.Writer
    public getReader(): java.io.Reader
    public setReader(arg0: java.io.Reader): void
    public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public getErrorWriter(): java.io.Writer
    public setErrorWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public getAttributesScope(arg0: java.lang.String | string): int
    public getBindings(arg0: int): javax.script.Bindings
    public getScopes(): java.util.List<java.lang.Integer>
    public static class: java.lang.Class<any>
}

    }
}