declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    abstract class AbstractResourceBundle extends java.util.ResourceBundle {
                        public static readonly LOCALE: string
                        public constructor()
                        public getString(arg0: java.lang.String | string, arg1: java.lang.Object[]): string
                        public static parseLocale(arg0: java.lang.String | string): java.util.Locale
                        public abstract getBundle(): java.util.ResourceBundle
                        protected handleGetObject(arg0: java.lang.String | string): java.lang.Object
                        public getKeys(): java.util.Enumeration
                        public static class: java.lang.Class<any>
                    }
                    interface AbstractResourceBundle$$Lambda extends java.util.ResourceBundle {
                        (): java.util.ResourceBundle
                    }
                }
            }
        }
    }
}