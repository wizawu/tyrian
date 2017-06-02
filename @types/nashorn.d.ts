type byte = number
type char = any
type double = number
type float = number
type int = number
type long = number
type short = number

declare class Java {
    static extend(type: any, impl: any): any
    static from(value: any): any
    static to(value: any, type: any): any
    static type(className: string): any
}

declare const Packages: any
declare const arguments: string[]
