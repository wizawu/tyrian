declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {

        class ElementKindVisitor6<R,P> extends javax.lang.model.util.SimpleElementVisitor6<R,P> {
          static readonly $assertionsDisabled: boolean
          protected constructor()
          protected constructor(arg0: R)
          public visitPackage(arg0: javax.lang.model.element.PackageElement, arg1: P): R
          public visitType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
          public visitTypeAsAnnotationType(arg0: javax.lang.model.element.TypeElement, arg1: P): R
          public visitTypeAsClass(arg0: javax.lang.model.element.TypeElement, arg1: P): R
          public visitTypeAsEnum(arg0: javax.lang.model.element.TypeElement, arg1: P): R
          public visitTypeAsInterface(arg0: javax.lang.model.element.TypeElement, arg1: P): R
          public visitVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsExceptionParameter(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsField(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsLocalVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsParameter(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitVariableAsResourceVariable(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitExecutable(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
          public visitExecutableAsConstructor(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
          public visitExecutableAsInstanceInit(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
          public visitExecutableAsMethod(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
          public visitExecutableAsStaticInit(arg0: javax.lang.model.element.ExecutableElement, arg1: P): R
          public visitTypeParameter(arg0: javax.lang.model.element.TypeParameterElement, arg1: P): R
        }

      }
    }
  }
}
