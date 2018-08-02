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
            protected getDefaultInitCtx(): javax.naming.Context
            protected getURLOrDefaultInitCtx(arg0: java.lang.String | string): javax.naming.Context
            protected getURLOrDefaultInitCtx(arg0: javax.naming.Name): javax.naming.Context
            public lookup(arg0: java.lang.String | string): java.lang.Object
            public lookup(arg0: javax.naming.Name): java.lang.Object
            public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public unbind(arg0: java.lang.String | string): void
            public unbind(arg0: javax.naming.Name): void
            public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
            public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
            public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
            public destroySubcontext(arg0: java.lang.String | string): void
            public destroySubcontext(arg0: javax.naming.Name): void
            public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
            public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
            public lookupLink(arg0: java.lang.String | string): java.lang.Object
            public lookupLink(arg0: javax.naming.Name): java.lang.Object
            public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
            public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
            public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
            public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
            public getEnvironment(): java.util.Hashtable<any, any>
            public close(): void
            public getNameInNamespace(): string
            public static class: java.lang.Class<any>
        }
    }
}