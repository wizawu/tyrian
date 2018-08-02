declare namespace javax {
    namespace lang {
        namespace model {
            namespace element {
interface ExecutableElement extends javax.lang.model.element.Element , javax.lang.model.element.Parameterizable {
    getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
    getReturnType(): javax.lang.model.type.TypeMirror
    getParameters(): java.util.List<javax.lang.model.element.VariableElement>
    getReceiverType(): javax.lang.model.type.TypeMirror
    isVarArgs(): boolean
    isDefault(): boolean
    getThrownTypes(): java.util.List<javax.lang.model.type.TypeMirror>
    getDefaultValue(): javax.lang.model.element.AnnotationValue
    getSimpleName(): javax.lang.model.element.Name
}

            }
        }
    }
}