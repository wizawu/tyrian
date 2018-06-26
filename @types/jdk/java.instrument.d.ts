declare namespace java {
    namespace lang {
        namespace instrument {
            class ClassDefinition {
                public constructor(arg0: java.lang.Class<any>, arg1: byte[])
                public getDefinitionClass(): java.lang.Class<any>
                public getDefinitionClassFile(): byte[]
                public static class: java.lang.Class<any>
            }
            interface ClassFileTransformer {
                transform(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
            }
            interface ClassFileTransformer$$Lambda {
                (arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
            }
            class IllegalClassFormatException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface Instrumentation {
                addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: boolean): void
                addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
                removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
                isRetransformClassesSupported(): boolean
                retransformClasses(...arg0: java.lang.Class<any>[]): void
                isRedefineClassesSupported(): boolean
                redefineClasses(...arg0: java.lang.instrument.ClassDefinition[]): void
                isModifiableClass(arg0: java.lang.Class<any>): boolean
                getAllLoadedClasses(): java.lang.Class[]
                getInitiatedClasses(arg0: java.lang.ClassLoader): java.lang.Class[]
                getObjectSize(arg0: java.lang.Object): long
                appendToBootstrapClassLoaderSearch(arg0: java.util.jar.JarFile): void
                appendToSystemClassLoaderSearch(arg0: java.util.jar.JarFile): void
                isNativeMethodPrefixSupported(): boolean
                setNativeMethodPrefix(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: java.lang.String | string): void
            }
            class UnmodifiableClassException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace sun {
    namespace instrument {
        class InstrumentationImpl implements java.lang.instrument.Instrumentation {
            public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
            public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: boolean): void
            public removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
            public isModifiableClass(arg0: java.lang.Class<any>): boolean
            public isRetransformClassesSupported(): boolean
            public retransformClasses(...arg0: java.lang.Class<any>[]): void
            public isRedefineClassesSupported(): boolean
            public redefineClasses(...arg0: java.lang.instrument.ClassDefinition[]): void
            public getAllLoadedClasses(): java.lang.Class[]
            public getInitiatedClasses(arg0: java.lang.ClassLoader): java.lang.Class[]
            public getObjectSize(arg0: java.lang.Object): long
            public appendToBootstrapClassLoaderSearch(arg0: java.util.jar.JarFile): void
            public appendToSystemClassLoaderSearch(arg0: java.util.jar.JarFile): void
            public isNativeMethodPrefixSupported(): boolean
            public setNativeMethodPrefix(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
        class TransformerManager {
            public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
            public removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
            public transform(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
            public static class: java.lang.Class<any>
        }
    }
}
