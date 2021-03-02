declare namespace java {
  namespace awt {
    namespace event {

      class HierarchyEvent extends java.awt.AWTEvent {
        public static readonly HIERARCHY_FIRST: int
        public static readonly HIERARCHY_CHANGED: int
        public static readonly ANCESTOR_MOVED: int
        public static readonly ANCESTOR_RESIZED: int
        public static readonly HIERARCHY_LAST: int
        public static readonly PARENT_CHANGED: int
        public static readonly DISPLAYABILITY_CHANGED: int
        public static readonly SHOWING_CHANGED: int
        changed: java.awt.Component
        changedParent: java.awt.Container
        changeFlags: long
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component, arg3: java.awt.Container)
        public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component, arg3: java.awt.Container, arg4: long)
        public getComponent(): java.awt.Component
        public getChanged(): java.awt.Component
        public getChangedParent(): java.awt.Container
        public getChangeFlags(): long
        public paramString(): java.lang.String
      }

    }
  }
}
