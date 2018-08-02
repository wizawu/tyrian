declare namespace javax {
    namespace lang {
        namespace model {
            namespace type {
interface ExecutableType extends javax.lang.model.type.TypeMirror {
    getTypeVariables(): java.util.List<javax.lang.model.type.TypeVariable>
    getReturnType(): javax.lang.model.type.TypeMirror
    getParameterTypes(): java.util.List<javax.lang.model.type.TypeMirror>
    getReceiverType(): javax.lang.model.type.TypeMirror
    getThrownTypes(): java.util.List<javax.lang.model.type.TypeMirror>
}

            }
        }
    }
}