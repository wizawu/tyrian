declare namespace java {
  namespace beans {
    interface BeanProperty extends java.lang.annotation.Annotation {
      bound(): boolean
      expert(): boolean
      hidden(): boolean
      preferred(): boolean
      required(): boolean
      visualUpdate(): boolean
      description(): java.lang.String
      enumerationValues(): java.lang.String[]
    }
  }
}
