declare namespace javax {
    namespace naming {
        class InitialContext implements javax.naming.Context {
            protected myProps: java.util.Hashtable<java.lang.Object, java.lang.Object>
            protected defaultInitCtx: javax.naming.Context
            protected gotDefault: boolean
            protected constructor(arg0: boolean)
            public constructor()
            public constructor(arg0: java.util.Hashtable<any, any>)
            protected init(arg0: java.util.Hashtable<any, any>): void
            public static doLookup<T>(arg0: javax.naming.Name): T
            public static doLookup<T>(arg0: java.lang.String | string): T
            protected getDefaultInitCtx<T>(): javax.naming.Context
            protected getURLOrDefaultInitCtx<T>(arg0: java.lang.String | string): javax.naming.Context
            protected getURLOrDefaultInitCtx<T>(arg0: javax.naming.Name): javax.naming.Context
            public lookup<T>(arg0: java.lang.String | string): java.lang.Object
            public lookup<T>(arg0: javax.naming.Name): java.lang.Object
            public bind<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public bind<T>(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public rebind<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public rebind<T>(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public unbind<T>(arg0: java.lang.String | string): void
            public unbind<T>(arg0: javax.naming.Name): void
            public rename<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public rename<T>(arg0: javax.naming.Name, arg1: javax.naming.Name): void
            public list<T>(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public list<T>(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public listBindings<T>(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
            public listBindings<T>(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
            public destroySubcontext<T>(arg0: java.lang.String | string): void
            public destroySubcontext<T>(arg0: javax.naming.Name): void
            public createSubcontext<T>(arg0: java.lang.String | string): javax.naming.Context
            public createSubcontext<T>(arg0: javax.naming.Name): javax.naming.Context
            public lookupLink<T>(arg0: java.lang.String | string): java.lang.Object
            public lookupLink<T>(arg0: javax.naming.Name): java.lang.Object
            public getNameParser<T>(arg0: java.lang.String | string): javax.naming.NameParser
            public getNameParser<T>(arg0: javax.naming.Name): javax.naming.NameParser
            public composeName<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public composeName<T>(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
            public addToEnvironment<T>(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            public removeFromEnvironment<T>(arg0: java.lang.String | string): java.lang.Object
            public getEnvironment<T>(): java.util.Hashtable<any, any>
            public close<T>(): void
            public getNameInNamespace<T>(): string
            public static class: java.lang.Class<any>
        }
    }
}