declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class XMLEntityStorage {
                        protected static ERROR_REPORTER: string
                        protected static WARN_ON_DUPLICATE_ENTITYDEF: string
                        protected fWarnDuplicateEntityDef: boolean
                        protected fEntities: java.util.Map<java.lang.String, com.sun.xml.internal.stream.Entity>
                        protected fCurrentEntity: com.sun.xml.internal.stream.Entity$ScannedEntity
                        protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                        protected fPropertyManager: com.sun.org.apache.xerces.internal.impl.PropertyManager
                        protected fInExternalSubset: boolean
                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.XMLEntityManager | com.sun.org.apache.xerces.internal.impl.XMLEntityManager$$Lambda)
                        public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                        public reset(): void
                        public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                        public getEntity(arg0: java.lang.String | string): com.sun.xml.internal.stream.Entity
                        public hasEntities(): boolean
                        public getEntitySize(): int
                        public getEntityKeys(): java.util.Enumeration
                        public addInternalEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public addExternalEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        public isExternalEntity(arg0: java.lang.String | string): boolean
                        public isEntityDeclInExternalSubset(arg0: java.lang.String | string): boolean
                        public addUnparsedEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                        public isUnparsedEntity(arg0: java.lang.String | string): boolean
                        public isDeclaredEntity(arg0: java.lang.String | string): boolean
                        public static expandSystemId(arg0: java.lang.String | string): string
                        public static expandSystemId(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        protected static fixURI(arg0: java.lang.String | string): string
                        public startExternalSubset(): void
                        public endExternalSubset(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}