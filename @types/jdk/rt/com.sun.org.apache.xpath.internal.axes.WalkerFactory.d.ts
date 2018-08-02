declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class WalkerFactory {
    public static BITS_COUNT: int
    public static BITS_RESERVED: int
    public static BIT_PREDICATE: int
    public static BIT_ANCESTOR: int
    public static BIT_ANCESTOR_OR_SELF: int
    public static BIT_ATTRIBUTE: int
    public static BIT_CHILD: int
    public static BIT_DESCENDANT: int
    public static BIT_DESCENDANT_OR_SELF: int
    public static BIT_FOLLOWING: int
    public static BIT_FOLLOWING_SIBLING: int
    public static BIT_NAMESPACE: int
    public static BIT_PARENT: int
    public static BIT_PRECEDING: int
    public static BIT_PRECEDING_SIBLING: int
    public static BIT_SELF: int
    public static BIT_FILTER: int
    public static BIT_ROOT: int
    public static BITMASK_TRAVERSES_OUTSIDE_SUBTREE: int
    public static BIT_BACKWARDS_SELF: int
    public static BIT_ANY_DESCENDANT_FROM_ROOT: int
    public static BIT_NODETEST_ANY: int
    public static BIT_MATCH_PATTERN: int
    public constructor()
    public static isSet(arg0: int, arg1: int): boolean
    public static diagnoseIterator(arg0: java.lang.String | string, arg1: int, arg2: com.sun.org.apache.xpath.internal.compiler.Compiler): void
    public static newDTMIterator(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public static getAxisFromStep(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int): int
    public static getAnalysisBitFromAxes(arg0: int): int
    public static mightBeProximate(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int): boolean
    public static isDownwardAxisOfMany(arg0: int): boolean
    public static getAnalysisString(arg0: int): string
    public static hasPredicate(arg0: int): boolean
    public static isWild(arg0: int): boolean
    public static walksAncestors(arg0: int): boolean
    public static walksAttributes(arg0: int): boolean
    public static walksNamespaces(arg0: int): boolean
    public static walksChildren(arg0: int): boolean
    public static walksDescendants(arg0: int): boolean
    public static walksSubtree(arg0: int): boolean
    public static walksSubtreeOnlyMaybeAbsolute(arg0: int): boolean
    public static walksSubtreeOnly(arg0: int): boolean
    public static walksFilteredList(arg0: int): boolean
    public static walksSubtreeOnlyFromRootOrContext(arg0: int): boolean
    public static walksInDocOrder(arg0: int): boolean
    public static walksFollowingOnlyMaybeAbsolute(arg0: int): boolean
    public static walksUp(arg0: int): boolean
    public static walksSideways(arg0: int): boolean
    public static walksExtraNodes(arg0: int): boolean
    public static walksExtraNodesOnly(arg0: int): boolean
    public static isAbsolute(arg0: int): boolean
    public static walksChildrenOnly(arg0: int): boolean
    public static walksChildrenAndExtraAndSelfOnly(arg0: int): boolean
    public static walksDescendantsAndExtraAndSelfOnly(arg0: int): boolean
    public static walksSelfOnly(arg0: int): boolean
    public static walksUpOnly(arg0: int): boolean
    public static walksDownOnly(arg0: int): boolean
    public static walksDownExtraOnly(arg0: int): boolean
    public static canSkipSubtrees(arg0: int): boolean
    public static canCrissCross(arg0: int): boolean
    public static isNaturalDocOrder(arg0: int): boolean
    public static isOneStep(arg0: int): boolean
    public static getStepCount(arg0: int): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}