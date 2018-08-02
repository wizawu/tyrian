declare namespace java {
    namespace awt {
        namespace event {
class HierarchyEvent extends java.awt.AWTEvent {
    public static HIERARCHY_FIRST: int
    public static HIERARCHY_CHANGED: int
    public static ANCESTOR_MOVED: int
    public static ANCESTOR_RESIZED: int
    public static HIERARCHY_LAST: int
    public static PARENT_CHANGED: int
    public static DISPLAYABILITY_CHANGED: int
    public static SHOWING_CHANGED: int
    public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component, arg3: java.awt.Container)
    public constructor(arg0: java.awt.Component, arg1: int, arg2: java.awt.Component, arg3: java.awt.Container, arg4: long)
    public getComponent(): java.awt.Component
    public getChanged(): java.awt.Component
    public getChangedParent(): java.awt.Container
    public getChangeFlags(): long
    public paramString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}