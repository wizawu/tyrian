declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
class ExternalMetadataFeature extends javax.xml.ws.WebServiceFeature {
    public addResources(...arg0: java.lang.String[]): void
    public getResourceNames(): java.util.List<java.lang.String>
    public addFiles(...arg0: java.io.File[]): void
    public getFiles(): java.util.List<java.io.File>
    public isEnabled(): boolean
    public getID(): string
    public getMetadataReader(arg0: java.lang.ClassLoader, arg1: boolean): com.sun.xml.internal.ws.api.databinding.MetadataReader
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static builder(): com.oracle.webservices.internal.api.databinding.ExternalMetadataFeature$Builder
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}