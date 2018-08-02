declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
class BindingInfo {
    protected classLoader: java.lang.ClassLoader
    public constructor()
    public getDatabindingMode(): string
    public setDatabindingMode(arg0: java.lang.String | string): void
    public getDefaultNamespace(): string
    public setDefaultNamespace(arg0: java.lang.String | string): void
    public contentClasses(): java.util.Collection<java.lang.Class>
    public typeInfos(): java.util.Collection<com.sun.xml.internal.ws.spi.db.TypeInfo>
    public subclassReplacements(): java.util.Map<java.lang.Class, java.lang.Class>
    public properties(): java.util.Map<java.lang.String, java.lang.Object>
    public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
    public setSEIModel(arg0: com.sun.xml.internal.ws.api.model.SEIModel): void
    public getClassLoader(): java.lang.ClassLoader
    public setClassLoader(arg0: java.lang.ClassLoader): void
    public getWsdlURL(): java.net.URL
    public setWsdlURL(arg0: java.net.URL): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}