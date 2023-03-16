declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {
        interface JSObject {
          call(arg0: java.lang.Object | any, ...vargs: (java.lang.Object | any)[]): java.lang.Object
          newObject(...vargs: (java.lang.Object | any)[]): java.lang.Object
          eval(arg0: java.lang.String | string): java.lang.Object
          getMember(arg0: java.lang.String | string): java.lang.Object
          getSlot(arg0: number | java.lang.Integer): java.lang.Object
          hasMember(arg0: java.lang.String | string): boolean
          hasSlot(arg0: number | java.lang.Integer): boolean
          removeMember(arg0: java.lang.String | string): void
          setMember(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
          setSlot(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
          keySet(): java.util.Set<java.lang.String>
          values(): java.util.Collection<java.lang.Object>
          isInstance(arg0: java.lang.Object | any): boolean
          isInstanceOf(arg0: java.lang.Object | any): boolean
          getClassName(): java.lang.String
          isFunction(): boolean
          isStrictFunction(): boolean
          isArray(): boolean
          toNumber?(): number
          getDefaultValue?(arg0: java.lang.Class<unknown>): java.lang.Object
        }
      }
    }
  }
}
