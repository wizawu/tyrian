declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
class SimpleTypeVisitor6<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
    protected DEFAULT_VALUE: R
    protected constructor()
    protected constructor(arg0: R)
    protected defaultAction(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
    public visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
    public visitNull(arg0: javax.lang.model.type.NullType, arg1: P): R
    public visitArray(arg0: javax.lang.model.type.ArrayType, arg1: P): R
    public visitDeclared(arg0: javax.lang.model.type.DeclaredType, arg1: P): R
    public visitError(arg0: javax.lang.model.type.ErrorType, arg1: P): R
    public visitTypeVariable(arg0: javax.lang.model.type.TypeVariable, arg1: P): R
    public visitWildcard(arg0: javax.lang.model.type.WildcardType, arg1: P): R
    public visitExecutable(arg0: javax.lang.model.type.ExecutableType, arg1: P): R
    public visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
    public static class: java.lang.Class<any>
}

            }
        }
    }
}