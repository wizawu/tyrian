declare namespace javax {
    namespace annotation {
        namespace processing {
            abstract class AbstractProcessor implements javax.annotation.processing.Processor {
                protected processingEnv: javax.annotation.processing.ProcessingEnvironment
                protected constructor()
                public getSupportedOptions(): java.util.Set<java.lang.String>
                public getSupportedAnnotationTypes(): java.util.Set<java.lang.String>
                public getSupportedSourceVersion(): javax.lang.model.SourceVersion
                public init(arg0: javax.annotation.processing.ProcessingEnvironment): void
                public abstract process(arg0: java.util.Set<javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean
                public getCompletions(arg0: javax.lang.model.element.Element, arg1: javax.lang.model.element.AnnotationMirror, arg2: javax.lang.model.element.ExecutableElement, arg3: java.lang.String | string): java.lang.Iterable<javax.annotation.processing.Completion>
                protected isInitialized(): boolean
                public static class: java.lang.Class<any>
            }
            interface AbstractProcessor$$Lambda implements javax.annotation.processing.Processor {
                (arg0: java.util.Set<javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean
            }
        }
    }
}