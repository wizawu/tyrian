declare namespace javax {
  namespace print {
    namespace attribute {

      interface AttributeSet {
        get(arg0: java.lang.Class<unknown>): javax.print.attribute.Attribute
        add(arg0: javax.print.attribute.Attribute): boolean
        remove(arg0: java.lang.Class<unknown>): boolean
        remove(arg0: javax.print.attribute.Attribute): boolean
        containsKey(arg0: java.lang.Class<unknown>): boolean
        containsValue(arg0: javax.print.attribute.Attribute): boolean
        addAll(arg0: javax.print.attribute.AttributeSet): boolean
        size(): number
        toArray(): javax.print.attribute.Attribute[]
        clear(): void
        isEmpty(): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
