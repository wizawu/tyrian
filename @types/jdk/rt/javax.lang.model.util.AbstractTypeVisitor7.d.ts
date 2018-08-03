declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
                abstract class AbstractTypeVisitor7<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
                    protected constructor()
                    public abstract visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
                    public static class: java.lang.Class<any>
                }
                interface AbstractTypeVisitor7$$Lambda<R, P> extends javax.lang.model.util.AbstractTypeVisitor6<R, P> {
                    (arg0: javax.lang.model.type.UnionType, arg1: P): R
                }
            }
        }
    }
}