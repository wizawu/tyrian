declare namespace sun {
    namespace awt {
        namespace X11 {
class XAtomList {
    public constructor()
    public constructor(arg0: long, arg1: int)
    public constructor(arg0: sun.awt.X11.XAtom[])
    public getAtoms(): sun.awt.X11.XAtom[]
    public getAtomsData(): long
    public contains(arg0: sun.awt.X11.XAtom): boolean
    public add(arg0: sun.awt.X11.XAtom): void
    public remove(arg0: sun.awt.X11.XAtom): void
    public size(): int
    public subset(arg0: int, arg1: java.util.Map<java.lang.Integer, sun.awt.X11.XAtom>): sun.awt.X11.XAtomList
    public iterator(): java.util.Iterator<sun.awt.X11.XAtom>
    public addAll(arg0: sun.awt.X11.XAtomList): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}