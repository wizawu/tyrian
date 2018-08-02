declare namespace javax {
    namespace annotation {
        namespace processing {
            interface RoundEnvironment {
                processingOver(): boolean
                errorRaised(): boolean
                getRootElements(): java.util.Set<javax.lang.model.element.Element>
                getElementsAnnotatedWith(arg0: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.element.Element>
                getElementsAnnotatedWith(arg0: java.lang.Class<java.lang.annotation.Annotation>): java.util.Set<javax.lang.model.element.Element>
            }
        }
    }
}