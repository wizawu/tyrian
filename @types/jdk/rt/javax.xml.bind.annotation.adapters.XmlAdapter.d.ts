declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                namespace adapters {
                    abstract class XmlAdapter<ValueType, BoundType> {
                        protected constructor()
                        public abstract unmarshal(arg0: ValueType): BoundType
                        public abstract marshal(arg0: BoundType): ValueType
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}