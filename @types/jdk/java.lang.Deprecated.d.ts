declare namespace java {
  namespace lang {
    interface Deprecated extends java.lang.annotation.Annotation {
      since(): java.lang.String
      forRemoval(): boolean
    }
  }
}
