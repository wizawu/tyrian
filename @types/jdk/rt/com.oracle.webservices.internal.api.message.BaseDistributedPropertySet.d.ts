declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
                        abstract class BaseDistributedPropertySet extends com.oracle.webservices.internal.api.message.BasePropertySet implements com.oracle.webservices.internal.api.message.DistributedPropertySet {
                            public constructor()
                            public addSatellite(arg0: com.oracle.webservices.internal.api.message.PropertySet): void
                            public addSatellite(arg0: java.lang.Class<com.oracle.webservices.internal.api.message.PropertySet>, arg1: com.oracle.webservices.internal.api.message.PropertySet): void
                            public removeSatellite(arg0: com.oracle.webservices.internal.api.message.PropertySet): void
                            public copySatelliteInto(arg0: com.oracle.webservices.internal.api.message.DistributedPropertySet): void
                            public copySatelliteInto(arg0: com.oracle.webservices.internal.api.message.MessageContext): void
                            public getSatellite<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Class<T>): T
                            public getSatellites<T extends com.oracle.webservices.internal.api.message.PropertySet>(): java.util.Map<java.lang.Class<com.oracle.webservices.internal.api.message.PropertySet>, com.oracle.webservices.internal.api.message.PropertySet>
                            public get<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Object): java.lang.Object
                            public put<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                            public containsKey<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Object): boolean
                            public supports<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Object): boolean
                            public remove<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Object): java.lang.Object
                            protected createEntrySet<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>): void
                            protected asMapLocal<T extends com.oracle.webservices.internal.api.message.PropertySet>(): java.util.Map<java.lang.String, java.lang.Object>
                            protected supportsLocal<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Object): boolean
                            protected createView<T extends com.oracle.webservices.internal.api.message.PropertySet>(): java.util.Map<java.lang.String, java.lang.Object>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}