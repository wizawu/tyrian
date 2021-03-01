declare namespace javax {
  namespace swing {
    namespace text {

      class Segment implements java.lang.Cloneable, java.text.CharacterIterator, java.lang.CharSequence {

        public array: char[]
        public offset: int
        public count: int
        public constructor()
        public constructor(arg0: char[], arg1: int, arg2: int)
        public setPartialReturn(arg0: boolean): void
        public isPartialReturn(): boolean
        public toString(): java.lang.String
        public first(): char
        public last(): char
        public current(): char
        public next(): char
        public previous(): char
        public setIndex(arg0: int): char
        public getBeginIndex(): int
        public getEndIndex(): int
        public getIndex(): int
        public charAt(arg0: int): char
        public length(): int
        public subSequence(arg0: int, arg1: int): java.lang.CharSequence
        public clone(): java.lang.Object
      }

    }
  }
}
