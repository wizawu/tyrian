declare namespace javax {
    namespace swing {
        namespace text {
            class SimpleAttributeSet implements javax.swing.text.MutableAttributeSet , java.io.Serializable , java.lang.Cloneable {
                public static EMPTY: javax.swing.text.AttributeSet
                public constructor()
                public constructor(arg0: javax.swing.text.AttributeSet)
                public isEmpty(): boolean
                public getAttributeCount(): int
                public isDefined(arg0: java.lang.Object): boolean
                public isEqual(arg0: javax.swing.text.AttributeSet): boolean
                public copyAttributes(): javax.swing.text.AttributeSet
                public getAttributeNames(): java.util.Enumeration<any>
                public getAttribute(arg0: java.lang.Object): java.lang.Object
                public containsAttribute(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
                public addAttribute(arg0: java.lang.Object, arg1: java.lang.Object): void
                public addAttributes(arg0: javax.swing.text.AttributeSet): void
                public removeAttribute(arg0: java.lang.Object): void
                public removeAttributes(arg0: java.util.Enumeration<any>): void
                public removeAttributes(arg0: javax.swing.text.AttributeSet): void
                public getResolveParent(): javax.swing.text.AttributeSet
                public setResolveParent(arg0: javax.swing.text.AttributeSet): void
                public clone(): java.lang.Object
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}