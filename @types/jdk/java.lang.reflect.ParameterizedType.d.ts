declare namespace java {
  namespace lang {
    namespace reflect {

      interface ParameterizedType extends java.lang.reflect.Type {

        getActualTypeArguments(): java.lang.reflect.Type[]
        getRawType(): java.lang.reflect.Type
        getOwnerType(): java.lang.reflect.Type
      }

    }
  }
}
