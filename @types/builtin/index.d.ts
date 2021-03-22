/// <reference path="../jdk/index.d.ts" />

declare const Packages: any

declare function String(arg: any): java.lang.String
declare function exit(code?: number)
declare function quit(code?: number)

declare class Java {
  static addToClasspath(location: string): void
  static extend<T>(javaType: Record<string, unknown>, methods?: T): Record<string, unknown> & T
  static from(javaData: any): unknown[]
  static isJavaFunction(arg: any): boolean
  static isJavaMethod(arg: any): boolean
  static isJavaObject(arg: any): boolean
  static isScriptFunction(arg: any): boolean
  static isScriptObject(arg: any): boolean
  static isType(arg: any): boolean
  static super(self: any): unknown
  static synchronized(func: CallableFunction): CallableFunction
  static to(jsData: any, javaType: Record<string, unknown>): unknown
  static type(className: string): Record<string, unknown>
  static typeName(javaClass: Record<string, unknown>): string | undefined
}

declare namespace java {
  namespace util {
    namespace function$ {
      interface Consumer$$lambda<T> {
        (arg: T): void
      }
    }
  }
}
