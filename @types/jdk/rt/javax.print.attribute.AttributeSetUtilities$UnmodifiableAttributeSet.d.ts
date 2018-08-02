declare namespace javax {
    namespace print {
        namespace attribute {
            class AttributeSetUtilities$UnmodifiableAttributeSet implements javax.print.attribute.AttributeSet , java.io.Serializable {
                public constructor(arg0: javax.print.attribute.AttributeSet)
                public get(arg0: java.lang.Class<any>): javax.print.attribute.Attribute
                public add(arg0: javax.print.attribute.Attribute): boolean
                public remove(arg0: java.lang.Class<any>): boolean
                public remove(arg0: javax.print.attribute.Attribute): boolean
                public containsKey(arg0: java.lang.Class<any>): boolean
                public containsValue(arg0: javax.print.attribute.Attribute): boolean
                public addAll(arg0: javax.print.attribute.AttributeSet): boolean
                public size(): int
                public toArray(): javax.print.attribute.Attribute[]
                public clear(): void
                public isEmpty(): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}