declare namespace javax {
  namespace swing {
    namespace text {
      class SimpleAttributeSet
        implements javax.swing.text.MutableAttributeSet, java.io.Serializable, java.lang.Cloneable
      {
        public static readonly EMPTY: javax.swing.text.AttributeSet
        public constructor()
        public constructor(arg0: javax.swing.text.AttributeSet)
        public isEmpty(): boolean
        public getAttributeCount(): number
        public isDefined(arg0: java.lang.Object | any): boolean
        public isEqual(arg0: javax.swing.text.AttributeSet): boolean
        public copyAttributes(): javax.swing.text.AttributeSet
        public getAttributeNames(): java.util.Enumeration<unknown>
        public getAttribute(arg0: java.lang.Object | any): java.lang.Object
        public containsAttribute(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
        public containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
        public addAttribute(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
        public addAttributes(arg0: javax.swing.text.AttributeSet): void
        public removeAttribute(arg0: java.lang.Object | any): void
        public removeAttributes(arg0: java.util.Enumeration<unknown>): void
        public removeAttributes(arg0: javax.swing.text.AttributeSet): void
        public getResolveParent(): javax.swing.text.AttributeSet
        public setResolveParent(arg0: javax.swing.text.AttributeSet): void
        public clone(): java.lang.Object
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public toString(): java.lang.String
      }
    }
  }
}
