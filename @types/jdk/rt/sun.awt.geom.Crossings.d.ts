declare namespace sun {
    namespace awt {
        namespace geom {
            abstract class Crossings {
                public static readonly debug: boolean
                public constructor(arg0: double, arg1: double, arg2: double, arg3: double)
                public getXLo(): double
                public getYLo(): double
                public getXHi(): double
                public getYHi(): double
                public abstract record(arg0: double, arg1: double, arg2: int): void
                public print(): void
                public isEmpty(): boolean
                public abstract covers(arg0: double, arg1: double): boolean
                public static findCrossings(arg0: java.util.Vector, arg1: double, arg2: double, arg3: double, arg4: double): sun.awt.geom.Crossings
                public static findCrossings(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): sun.awt.geom.Crossings
                public accumulateLine(arg0: double, arg1: double, arg2: double, arg3: double): boolean
                public accumulateLine(arg0: double, arg1: double, arg2: double, arg3: double, arg4: int): boolean
                public accumulateQuad(arg0: double, arg1: double, arg2: double[]): boolean
                public accumulateCubic(arg0: double, arg1: double, arg2: double[]): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}