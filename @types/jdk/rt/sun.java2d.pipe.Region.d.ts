declare namespace sun {
    namespace java2d {
        namespace pipe {
            class Region {
                public static readonly EMPTY_REGION: sun.java2d.pipe.Region
                public static readonly WHOLE_REGION: sun.java2d.pipe.Region
                public static dimAdd(arg0: int, arg1: int): int
                public static clipAdd(arg0: int, arg1: int): int
                public static clipScale(arg0: int, arg1: double): int
                protected constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                public static getInstance(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform): sun.java2d.pipe.Region
                public static getInstance(arg0: sun.java2d.pipe.Region, arg1: java.awt.Shape, arg2: java.awt.geom.AffineTransform): sun.java2d.pipe.Region
                public static getInstance(arg0: sun.java2d.pipe.Region, arg1: boolean, arg2: java.awt.Shape, arg3: java.awt.geom.AffineTransform): sun.java2d.pipe.Region
                public static getInstance(arg0: java.awt.Rectangle): sun.java2d.pipe.Region
                public static getInstanceXYWH(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public static getInstance(arg0: int[]): sun.java2d.pipe.Region
                public static getInstanceXYXY(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public setOutputArea(arg0: java.awt.Rectangle): void
                public setOutputAreaXYWH(arg0: int, arg1: int, arg2: int, arg3: int): void
                public setOutputArea(arg0: int[]): void
                public setOutputAreaXYXY(arg0: int, arg1: int, arg2: int, arg3: int): void
                public appendSpans(arg0: sun.java2d.pipe.SpanIterator): void
                public getScaledRegion(arg0: double, arg1: double): sun.java2d.pipe.Region
                public getTranslatedRegion(arg0: int, arg1: int): sun.java2d.pipe.Region
                public getIntersection(arg0: java.awt.Rectangle): sun.java2d.pipe.Region
                public getIntersectionXYWH(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public getIntersectionXYXY(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public getIntersection(arg0: sun.java2d.pipe.Region): sun.java2d.pipe.Region
                public getUnion(arg0: sun.java2d.pipe.Region): sun.java2d.pipe.Region
                public getDifference(arg0: sun.java2d.pipe.Region): sun.java2d.pipe.Region
                public getExclusiveOr(arg0: sun.java2d.pipe.Region): sun.java2d.pipe.Region
                public getBoundsIntersection(arg0: java.awt.Rectangle): sun.java2d.pipe.Region
                public getBoundsIntersectionXYWH(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public getBoundsIntersectionXYXY(arg0: int, arg1: int, arg2: int, arg3: int): sun.java2d.pipe.Region
                public getBoundsIntersection(arg0: sun.java2d.pipe.Region): sun.java2d.pipe.Region
                public getLoX(): int
                public getLoY(): int
                public getHiX(): int
                public getHiY(): int
                public getWidth(): int
                public getHeight(): int
                public isEmpty(): boolean
                public isRectangular(): boolean
                public contains(arg0: int, arg1: int): boolean
                public isInsideXYWH(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public isInsideXYXY(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public isInsideQuickCheck(arg0: sun.java2d.pipe.Region): boolean
                public intersectsQuickCheckXYXY(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public intersectsQuickCheck(arg0: sun.java2d.pipe.Region): boolean
                public encompasses(arg0: sun.java2d.pipe.Region): boolean
                public encompassesXYWH(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public encompassesXYXY(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public getBounds(arg0: int[]): void
                public clipBoxToBounds(arg0: int[]): void
                public getIterator(): sun.java2d.pipe.RegionIterator
                public getSpanIterator(): sun.java2d.pipe.SpanIterator
                public getSpanIterator(arg0: int[]): sun.java2d.pipe.SpanIterator
                public filter(arg0: sun.java2d.pipe.SpanIterator): sun.java2d.pipe.SpanIterator
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}