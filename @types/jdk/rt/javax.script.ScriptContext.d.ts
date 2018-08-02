declare namespace javax {
    namespace script {
        interface ScriptContext {
            ENGINE_SCOPE: int
            GLOBAL_SCOPE: int
            setBindings(arg0: javax.script.Bindings, arg1: int): void
            getBindings(arg0: int): javax.script.Bindings
            setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
            getAttribute(arg0: java.lang.String | string, arg1: int): java.lang.Object
            removeAttribute(arg0: java.lang.String | string, arg1: int): java.lang.Object
            getAttribute(arg0: java.lang.String | string): java.lang.Object
            getAttributesScope(arg0: java.lang.String | string): int
            getWriter(): java.io.Writer
            getErrorWriter(): java.io.Writer
            setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
            setErrorWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
            getReader(): java.io.Reader
            setReader(arg0: java.io.Reader): void
            getScopes(): java.util.List<java.lang.Integer>
        }
    }
}