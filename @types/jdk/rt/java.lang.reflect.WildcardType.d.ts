declare namespace java {
    namespace lang {
        namespace reflect {
            interface WildcardType extends java.lang.reflect.Type {
                getUpperBounds(): java.lang.reflect.Type[]
                getLowerBounds(): java.lang.reflect.Type[]
            }
        }
    }
}