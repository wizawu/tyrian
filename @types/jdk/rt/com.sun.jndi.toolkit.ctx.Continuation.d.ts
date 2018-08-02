declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
                    class Continuation extends javax.naming.spi.ResolveResult {
                        protected starter: javax.naming.Name
                        protected followingLink: java.lang.Object
                        protected environment: java.util.Hashtable<any, any>
                        protected continuing: boolean
                        protected resolvedContext: javax.naming.Context
                        protected relativeResolvedName: javax.naming.Name
                        public constructor()
                        public constructor(arg0: javax.naming.Name, arg1: java.util.Hashtable<any, any>)
                        public isContinue(): boolean
                        public setSuccess(): void
                        public fillInException(arg0: javax.naming.NamingException): javax.naming.NamingException
                        public setErrorNNS(arg0: java.lang.Object, arg1: javax.naming.Name): void
                        public setErrorNNS(arg0: java.lang.Object, arg1: java.lang.String | string): void
                        public setError(arg0: java.lang.Object, arg1: javax.naming.Name): void
                        public setError(arg0: java.lang.Object, arg1: java.lang.String | string): void
                        public setContinueNNS(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context): void
                        public setContinueNNS(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: javax.naming.Context): void
                        public setContinue(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context): void
                        public setContinue(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: javax.naming.Name): void
                        public setContinue(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: javax.naming.Context, arg3: java.lang.String | string): void
                        public setContinue(arg0: java.lang.Object, arg1: java.lang.Object): void
                        public toString(): string
                        public toString(arg0: boolean): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}