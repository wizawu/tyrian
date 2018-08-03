declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            abstract class Coordinator implements org.xml.sax.ErrorHandler , javax.xml.bind.ValidationEventHandler {
                                public constructor()
                                public putAdapter(arg0: java.lang.Class<javax.xml.bind.annotation.adapters.XmlAdapter>, arg1: javax.xml.bind.annotation.adapters.XmlAdapter): javax.xml.bind.annotation.adapters.XmlAdapter
                                public getAdapter<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<T>): T
                                public containsAdapter<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<T>): boolean
                                protected pushCoordinator<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(): void
                                protected popCoordinator<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(): void
                                public static _getInstance<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(): com.sun.xml.internal.bind.v2.runtime.Coordinator
                                protected getLocation<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.ValidationEventLocator
                                public error<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: org.xml.sax.SAXParseException): void
                                public warning<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: org.xml.sax.SAXParseException): void
                                public fatalError<T extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: org.xml.sax.SAXParseException): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}