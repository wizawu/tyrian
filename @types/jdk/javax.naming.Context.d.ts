declare namespace javax {
  namespace naming {

    interface Context {
      public static readonly INITIAL_CONTEXT_FACTORY: java.lang.String
      public static readonly OBJECT_FACTORIES: java.lang.String
      public static readonly STATE_FACTORIES: java.lang.String
      public static readonly URL_PKG_PREFIXES: java.lang.String
      public static readonly PROVIDER_URL: java.lang.String
      public static readonly DNS_URL: java.lang.String
      public static readonly AUTHORITATIVE: java.lang.String
      public static readonly BATCHSIZE: java.lang.String
      public static readonly REFERRAL: java.lang.String
      public static readonly SECURITY_PROTOCOL: java.lang.String
      public static readonly SECURITY_AUTHENTICATION: java.lang.String
      public static readonly SECURITY_PRINCIPAL: java.lang.String
      public static readonly SECURITY_CREDENTIALS: java.lang.String
      public static readonly LANGUAGE: java.lang.String
      public static readonly APPLET: java.lang.String
      lookup(arg0: javax.naming.Name): java.lang.Object
      lookup(arg0: java.lang.String | string): java.lang.Object
      bind(arg0: javax.naming.Name, arg1: java.lang.Object | any): void
      bind(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      rebind(arg0: javax.naming.Name, arg1: java.lang.Object | any): void
      rebind(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
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
      composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
      removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
      getEnvironment(): java.util.Hashtable<unknown,unknown>
      close(): void
      getNameInNamespace(): java.lang.String
    }

  }
}
