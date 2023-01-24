declare namespace javax {
  namespace swing {
    namespace event {
      class ListDataEvent extends java.util.EventObject {
        public static readonly CONTENTS_CHANGED: int
        public static readonly INTERVAL_ADDED: int
        public static readonly INTERVAL_REMOVED: int
        public getType(): number
        public getIndex0(): number
        public getIndex1(): number
        public constructor(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public toString(): java.lang.String
      }
    }
  }
}
