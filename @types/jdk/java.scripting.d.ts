declare namespace javax {
    namespace script {
        abstract class AbstractScriptEngine implements javax.script.ScriptEngine {
            protected context: javax.script.ScriptContext
            public constructor()
            public constructor(arg0: javax.script.Bindings)
            public setContext(arg0: javax.script.ScriptContext): void
            public getContext(): javax.script.ScriptContext
            public getBindings(arg0: int): javax.script.Bindings
            public setBindings(arg0: javax.script.Bindings, arg1: int): void
            public put(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public get(arg0: java.lang.String | string): java.lang.Object
            public eval(arg0: java.io.Reader, arg1: javax.script.Bindings): java.lang.Object
            public eval(arg0: java.lang.String | string, arg1: javax.script.Bindings): java.lang.Object
            public eval(arg0: java.io.Reader): java.lang.Object
            public eval(arg0: java.lang.String | string): java.lang.Object
            protected getScriptContext(arg0: javax.script.Bindings): javax.script.ScriptContext
            public static class: java.lang.Class<any>
        }
        interface Bindings extends java.util.Map<java.lang.String, java.lang.Object> {
            put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
            containsKey(arg0: java.lang.Object): boolean
            get(arg0: java.lang.Object): java.lang.Object
            remove(arg0: java.lang.Object): java.lang.Object
            put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
        }
        interface Compilable {
            compile(arg0: java.lang.String | string): javax.script.CompiledScript
            compile(arg0: java.io.Reader): javax.script.CompiledScript
        }
        abstract class CompiledScript {
            public constructor()
            public eval(arg0: javax.script.ScriptContext): java.lang.Object
            public eval(arg0: javax.script.Bindings): java.lang.Object
            public eval(): java.lang.Object
            public getEngine(): javax.script.ScriptEngine
            public static class: java.lang.Class<any>
        }
        interface Invocable {
            invokeMethod(arg0: java.lang.Object, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.lang.Object
            invokeFunction(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.lang.Object
            getInterface<T>(arg0: java.lang.Class<T>): T
            getInterface<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
        }
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
        interface ScriptEngine {
            ARGV: string
            FILENAME: string
            ENGINE: string
            ENGINE_VERSION: string
            NAME: string
            LANGUAGE: string
            LANGUAGE_VERSION: string
            eval(arg0: java.lang.String | string, arg1: javax.script.ScriptContext): java.lang.Object
            eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
            eval(arg0: java.lang.String | string): java.lang.Object
            eval(arg0: java.io.Reader): java.lang.Object
            eval(arg0: java.lang.String | string, arg1: javax.script.Bindings): java.lang.Object
            eval(arg0: java.io.Reader, arg1: javax.script.Bindings): java.lang.Object
            put(arg0: java.lang.String | string, arg1: java.lang.Object): void
            get(arg0: java.lang.String | string): java.lang.Object
            getBindings(arg0: int): javax.script.Bindings
            setBindings(arg0: javax.script.Bindings, arg1: int): void
            createBindings(): javax.script.Bindings
            getContext(): javax.script.ScriptContext
            setContext(arg0: javax.script.ScriptContext): void
            getFactory(): javax.script.ScriptEngineFactory
        }
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
        class ScriptEngineManager {
            public constructor()
            public constructor(arg0: java.lang.ClassLoader)
            public setBindings(arg0: javax.script.Bindings): void
            public getBindings(): javax.script.Bindings
            public put(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public get(arg0: java.lang.String | string): java.lang.Object
            public getEngineByName(arg0: java.lang.String | string): javax.script.ScriptEngine
            public getEngineByExtension(arg0: java.lang.String | string): javax.script.ScriptEngine
            public getEngineByMimeType(arg0: java.lang.String | string): javax.script.ScriptEngine
            public getEngineFactories(): java.util.List<javax.script.ScriptEngineFactory>
            public registerEngineName(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
            public registerEngineMimeType(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
            public registerEngineExtension(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
            public static class: java.lang.Class<any>
        }
        class ScriptException extends java.lang.Exception {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.Exception)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int)
            public getMessage(): string
            public getLineNumber(): int
            public getColumnNumber(): int
            public getFileName(): string
            public static class: java.lang.Class<any>
        }
        class SimpleBindings implements javax.script.Bindings {
            public constructor(arg0: java.util.Map<java.lang.String, java.lang.Object>)
            public constructor()
            public put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            public putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
            public clear(): void
            public containsKey(arg0: java.lang.Object): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>
            public get(arg0: java.lang.Object): java.lang.Object
            public isEmpty(): boolean
            public keySet(): java.util.Set<java.lang.String>
            public remove(arg0: java.lang.Object): java.lang.Object
            public size(): int
            public values(): java.util.Collection<java.lang.Object>
            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public static class: java.lang.Class<any>
        }
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
