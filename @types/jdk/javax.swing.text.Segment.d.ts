declare namespace javax {
  namespace swing {
    namespace text {
      class Segment implements java.lang.Cloneable, java.text.CharacterIterator, java.lang.CharSequence {
        public array: char[]
        public offset: int
        public count: int
        copy: boolean
        public constructor()
        public constructor(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public setPartialReturn(arg0: boolean | java.lang.Boolean): void
        public isPartialReturn(): boolean
        public toString(): java.lang.String
        public first(): string
        public last(): string
        public current(): string
        public next(): string
        public previous(): string
        public setIndex(arg0: number | java.lang.Integer): string
        public getBeginIndex(): number
        public getEndIndex(): number
        public getIndex(): number
        public charAt(arg0: number | java.lang.Integer): string
        public length(): number
        public subSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
        public clone(): java.lang.Object
      }
    }
  }
}
