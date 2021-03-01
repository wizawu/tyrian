declare namespace javax {
  namespace print {
    namespace attribute {

      interface Attribute extends java.io.Serializable {

        getCategory(): java.lang.Class<javax.print.attribute.Attribute>
        getName(): java.lang.String
      }

    }
  }
}
