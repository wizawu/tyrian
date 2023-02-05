/// <reference path="../jdk/index.d.ts" />

declare const Packages: any

declare function echo(...args: any): void
declare function eval(script: string): unknown
declare function exit(code?: number)
declare function isFinite(arg?: any): boolean
declare function isNaN(arg?: any): boolean
declare function parseFloat(arg: any): number
declare function parseInt(arg: any): number
declare function print(...args: any): void
declare function quit(code?: number)
declare function String(arg: any): java.lang.String

declare namespace java {
  namespace util {
    namespace function$ {
      interface Consumer$$lambda<T> {
        (arg: T): void
      }
    }
  }
}
