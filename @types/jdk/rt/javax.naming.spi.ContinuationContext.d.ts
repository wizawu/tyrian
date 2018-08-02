declare namespace javax {
    namespace naming {
        namespace spi {
            class ContinuationContext implements javax.naming.Context , javax.naming.spi.Resolver {
                protected cpe: javax.naming.CannotProceedException
                protected env: java.util.Hashtable<any, any>
                protected contCtx: javax.naming.Context
                protected constructor(arg0: javax.naming.CannotProceedException, arg1: java.util.Hashtable<any, any>)
                protected getTargetContext(): javax.naming.Context
                public lookup(arg0: javax.naming.Name): java.lang.Object
                public lookup(arg0: java.lang.String | string): java.lang.Object
                public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public unbind(arg0: javax.naming.Name): void
                public unbind(arg0: java.lang.String | string): void
                public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                public destroySubcontext(arg0: javax.naming.Name): void
                public destroySubcontext(arg0: java.lang.String | string): void
                public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                public lookupLink(arg0: javax.naming.Name): java.lang.Object
                public lookupLink(arg0: java.lang.String | string): java.lang.Object
                public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                public getEnvironment(): java.util.Hashtable<any, any>
                public getNameInNamespace(): string
                public resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                public resolveToClass(arg0: java.lang.String | string, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}