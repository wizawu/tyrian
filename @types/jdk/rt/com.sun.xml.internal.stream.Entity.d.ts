declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    abstract class Entity {
                        public name: string
                        public inExternalSubset: boolean
                        public constructor()
                        public constructor(arg0: java.lang.String | string, arg1: boolean)
                        public isEntityDeclInExternalSubset(): boolean
                        public isExternal(): boolean
                        public isUnparsed(): boolean
                        public clear(): void
                        public setValues(arg0: com.sun.xml.internal.stream.Entity): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}