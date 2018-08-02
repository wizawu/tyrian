declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace schemagen {
                            class XmlSchemaGenerator<T, C, F, M> {
                                public constructor(arg0: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.core.TypeInfoSet<T, C, F, M>)
                                public add(arg0: com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C>): void
                                public add(arg0: com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>): void
                                public add(arg0: com.sun.xml.internal.bind.v2.model.core.EnumLeafInfo<T, C>): void
                                public add(arg0: com.sun.xml.internal.bind.v2.model.core.ArrayInfo<T, C>): void
                                public add(arg0: javax.xml.namespace.QName, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>): void
                                public writeEpisodeFile(arg0: com.sun.xml.internal.txw2.output.XmlSerializer): void
                                public write(arg0: javax.xml.bind.SchemaOutputResolver, arg1: com.sun.xml.internal.bind.api.ErrorListener): void
                                public toString(): string
                                protected static relativize(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}