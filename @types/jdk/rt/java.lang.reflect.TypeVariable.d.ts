declare namespace java {
    namespace lang {
        namespace reflect {
interface TypeVariable<D extends java.lang.reflect.GenericDeclaration> extends java.lang.reflect.Type , java.lang.reflect.AnnotatedElement {
    getBounds(): java.lang.reflect.Type[]
    getGenericDeclaration(): D
    getName(): string
    getAnnotatedBounds(): java.lang.reflect.AnnotatedType[]
}

        }
    }
}