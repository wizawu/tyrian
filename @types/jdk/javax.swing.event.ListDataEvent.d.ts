declare namespace javax {
  namespace swing {
    namespace event {

      class ListDataEvent extends java.util.EventObject {
        public static readonly CONTENTS_CHANGED: int
        public static readonly INTERVAL_ADDED: int
        public static readonly INTERVAL_REMOVED: int
        public getType(): int
        public getIndex0(): int
        public getIndex1(): int
        public constructor(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int)
        public toString(): java.lang.String
      }

    }
  }
}
