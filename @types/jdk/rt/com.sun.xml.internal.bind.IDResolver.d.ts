declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    abstract class IDResolver {
                        public constructor()
                        public startDocument(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                        public endDocument(): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public resolve(arg0: java.lang.String | string, arg1: java.lang.Class): java.util.concurrent.Callable<any>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}