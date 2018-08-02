declare namespace javax {
    namespace naming {
        interface Context {
            INITIAL_CONTEXT_FACTORY: string
            OBJECT_FACTORIES: string
            STATE_FACTORIES: string
            URL_PKG_PREFIXES: string
            PROVIDER_URL: string
            DNS_URL: string
            AUTHORITATIVE: string
            BATCHSIZE: string
            REFERRAL: string
            SECURITY_PROTOCOL: string
            SECURITY_AUTHENTICATION: string
            SECURITY_PRINCIPAL: string
            SECURITY_CREDENTIALS: string
            LANGUAGE: string
            APPLET: string
            lookup(arg0: javax.naming.Name): java.lang.Object
            lookup(arg0: java.lang.String | string): java.lang.Object
            bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            unbind(arg0: javax.naming.Name): void
            unbind(arg0: java.lang.String | string): void
            rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
            rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
            listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
            destroySubcontext(arg0: javax.naming.Name): void
            destroySubcontext(arg0: java.lang.String | string): void
            createSubcontext(arg0: javax.naming.Name): javax.naming.Context
            createSubcontext(arg0: java.lang.String | string): javax.naming.Context
            lookupLink(arg0: javax.naming.Name): java.lang.Object
            lookupLink(arg0: java.lang.String | string): java.lang.Object
            getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
            getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
            composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
            composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
            getEnvironment(): java.util.Hashtable<any, any>
            close(): void
            getNameInNamespace(): string
        }
    }
}