declare namespace javax {
  namespace print {

    interface AttributeException {
      getUnsupportedAttributes(): java.lang.Class<unknown>[]
      getUnsupportedValues(): javax.print.attribute.Attribute[]
    }

  }
}
