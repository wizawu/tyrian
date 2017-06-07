/**
 *  Reference:
 *    http://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/api.html
 *    http://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/shell.html
 */

type byte = number
type char = string
type double = number
type float = number
type int = number
type long = number
type short = number

declare const $ARG: string[]
declare const $ENV: Object
declare const Packages: Object

// declare function Number(arg: any): java.lang.Double
// declare function print(...args: any[]): void
declare function String(arg: any): java.lang.String
declare function echo(...args: any[]): void
declare function exit(code?: number): void
declare function load(script: string | Object): void
declare function loadWithNewGlobal(script: string | Object): void
declare function quit(code?: number): void
declare function readFully(filepath: string): string
declare function readLine(prompt?: string): string

declare class Java {
    static extend(type: any, impl: Object): any
    static from(value: any): any
    static to(jsValue: Object, javaType: any): any
    static type(className: string): any
}

declare namespace java {
    namespace util {
        namespace function$ {
            interface Consumer$$TypeScript<T> {
                (arg: T): any
            }
        }
    }
}
