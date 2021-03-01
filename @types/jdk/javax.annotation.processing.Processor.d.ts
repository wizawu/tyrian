declare namespace javax {
  namespace annotation {
    namespace processing {

      interface Processor {

        getSupportedOptions(): java.util.Set<java.lang.String>
        getSupportedAnnotationTypes(): java.util.Set<java.lang.String>
        getSupportedSourceVersion(): javax.lang.model.SourceVersion
        init(arg0: javax.annotation.processing.ProcessingEnvironment): void
        process(arg0: java.util.Set<javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean
        getCompletions(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.AnnotationMirror, arg2: javax.lang.model.element.ExecutableElement, arg3: java.lang.String): java.lang.Iterable<javax.annotation.processing.Completion>
      }

    }
  }
}
