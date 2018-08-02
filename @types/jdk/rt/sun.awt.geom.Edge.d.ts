declare namespace sun {
    namespace awt {
        namespace geom {
            class Edge {
                public constructor(arg0: sun.awt.geom.Curve, arg1: int)
                public constructor(arg0: sun.awt.geom.Curve, arg1: int, arg2: int)
                public getCurve(): sun.awt.geom.Curve
                public getCurveTag(): int
                public getEdgeTag(): int
                public setEdgeTag(arg0: int): void
                public getEquivalence(): int
                public setEquivalence(arg0: int): void
                public compareTo(arg0: sun.awt.geom.Edge, arg1: double[]): int
                public record(arg0: double, arg1: int): void
                public isActiveFor(arg0: double, arg1: int): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}