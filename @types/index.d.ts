/// <reference path="jdk/index.d.ts" />

/**
 *  Reference:
 *    http://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/api.html
 *    http://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/shell.html
 */

type byte = number
type char = object      // typeof (new java.lang.String("char").toCharArray()[0])
type double = number
type float = number
type int = number
type long = number
type short = number

declare const $ARG: string[]
declare const $ENV: any
declare const Packages: any

declare function String(arg: any): java.lang.String
declare function echo(...args: any[]): void
declare function exit(code?: number): void
declare function load(script: string | object): void
declare function loadWithNewGlobal(script: string | object): void
declare function quit(code?: number): void
declare function readFully(filepath: string): string
declare function readLine(prompt?: string): string

declare class Java {
    static extend(type: any, impl?: object): any
    static super(variable: object): any
    static from(value: any): any
    static to(jsValue: any, javaType: any): any
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
