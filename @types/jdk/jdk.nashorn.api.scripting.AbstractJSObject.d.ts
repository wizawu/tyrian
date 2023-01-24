declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {
        abstract class AbstractJSObject implements jdk.nashorn.api.scripting.JSObject {
          public constructor()
          public call(arg0: java.lang.Object | any, ...vargs: (java.lang.Object | any)[]): java.lang.Object
          public newObject(...vargs: (java.lang.Object | any)[]): java.lang.Object
          public eval(arg0: java.lang.String | string): java.lang.Object
          public getMember(arg0: java.lang.String | string): java.lang.Object
          public getSlot(arg0: number | java.lang.Integer): java.lang.Object
          public hasMember(arg0: java.lang.String | string): boolean
          public hasSlot(arg0: number | java.lang.Integer): boolean
          public removeMember(arg0: java.lang.String | string): void
          public setMember(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
          public setSlot(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
          public keySet(): java.util.Set<java.lang.String>
          public values(): java.util.Collection<java.lang.Object>
          public isInstance(arg0: java.lang.Object | any): boolean
          public isInstanceOf(arg0: java.lang.Object | any): boolean
          public getClassName(): java.lang.String
          public isFunction(): boolean
          public isStrictFunction(): boolean
          public isArray(): boolean
          public toNumber(): number
          public static getDefaultValue(
            arg0: jdk.nashorn.api.scripting.JSObject,
            arg1: java.lang.Class<unknown>
          ): java.lang.Object
        }
      }
    }
  }
}
