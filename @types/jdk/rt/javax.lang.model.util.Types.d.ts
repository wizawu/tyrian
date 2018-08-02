declare namespace javax {
    namespace lang {
        namespace model {
            namespace util {
interface Types {
    asElement(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.element.Element
    isSameType(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
    isSubtype(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
    isAssignable(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
    contains(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): boolean
    isSubsignature(arg0: javax.lang.model.type.ExecutableType, arg1: javax.lang.model.type.ExecutableType): boolean
    directSupertypes(arg0: javax.lang.model.type.TypeMirror): java.util.List<javax.lang.model.type.TypeMirror>
    erasure(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror
    boxedClass(arg0: javax.lang.model.type.PrimitiveType): javax.lang.model.element.TypeElement
    unboxedType(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.PrimitiveType
    capture(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror
    getPrimitiveType(arg0: javax.lang.model.type.TypeKind): javax.lang.model.type.PrimitiveType
    getNullType(): javax.lang.model.type.NullType
    getNoType(arg0: javax.lang.model.type.TypeKind): javax.lang.model.type.NoType
    getArrayType(arg0: javax.lang.model.type.TypeMirror): javax.lang.model.type.ArrayType
    getWildcardType(arg0: javax.lang.model.type.TypeMirror, arg1: javax.lang.model.type.TypeMirror): javax.lang.model.type.WildcardType
    getDeclaredType(arg0: javax.lang.model.element.TypeElement, ...arg1: javax.lang.model.type.TypeMirror[]): javax.lang.model.type.DeclaredType
    getDeclaredType(arg0: javax.lang.model.type.DeclaredType, arg1: javax.lang.model.element.TypeElement, ...arg2: javax.lang.model.type.TypeMirror[]): javax.lang.model.type.DeclaredType
    asMemberOf(arg0: javax.lang.model.type.DeclaredType, arg1: javax.lang.model.element.Element): javax.lang.model.type.TypeMirror
}

            }
        }
    }
}