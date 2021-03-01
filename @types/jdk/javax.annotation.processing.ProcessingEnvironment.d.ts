declare namespace javax {
  namespace annotation {
    namespace processing {

      interface ProcessingEnvironment {

        getOptions(): java.util.Map<java.lang.String,java.lang.String>
        getMessager(): javax.annotation.processing.Messager
        getFiler(): javax.annotation.processing.Filer
        getElementUtils(): javax.lang.model.util.Elements
        getTypeUtils(): javax.lang.model.util.Types
        getSourceVersion(): javax.lang.model.SourceVersion
        getLocale(): java.util.Locale
      }

    }
  }
}
