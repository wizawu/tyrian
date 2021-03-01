declare namespace java {
  namespace beans {

    interface JavaBean extends java.lang.annotation.Annotation {

      description(): java.lang.String
      defaultProperty(): java.lang.String
      defaultEventSet(): java.lang.String
    }

  }
}
