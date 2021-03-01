declare namespace java {
  namespace awt {
    namespace event {

      class ItemEvent extends java.awt.AWTEvent {

        public static readonly ITEM_FIRST: int
        public static readonly ITEM_LAST: int
        public static readonly ITEM_STATE_CHANGED: int
        public static readonly SELECTED: int
        public static readonly DESELECTED: int
        item: java.lang.Object
        stateChange: int
        public constructor(arg0: java.awt.ItemSelectable, arg1: int, arg2: java.lang.Object, arg3: int)
        public getItemSelectable(): java.awt.ItemSelectable
        public getItem(): java.lang.Object
        public getStateChange(): int
        public paramString(): java.lang.String
      }

    }
  }
}
